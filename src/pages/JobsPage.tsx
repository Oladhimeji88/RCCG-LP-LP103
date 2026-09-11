import { ArrowRight, ExternalLink } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { ButtonLink } from '../components/ButtonLink'
import { SectionHeading } from '../components/SectionHeading'
import { useManagedJobsContent } from '../lib/contentStore'
import { cn } from '../lib/utils'

type LiveJob = {
  id: string
  title: string
  company: string
  location: string
  salary: string
  url: string
  postedDate: string
}

type JobsApiResponse = {
  configured: boolean
  jobs: LiveJob[]
  error?: string
}

const indeedSearchUrl = (title: string) =>
  `https://ng.indeed.com/jobs?${new URLSearchParams({ q: title, l: 'Lagos, Lagos State' }).toString()}`

export function JobsPage() {
  const jobsContent = useManagedJobsContent()
  const [activeMonthId, setActiveMonthId] = useState(jobsContent.months[0]?.id ?? '')
  const [liveJobs, setLiveJobs] = useState<LiveJob[] | null>(null)

  useEffect(() => {
    if (!jobsContent.months.length) {
      setActiveMonthId('')
      return
    }

    const activeMonthStillExists = jobsContent.months.some((month) => month.id === activeMonthId)

    if (!activeMonthStillExists) {
      setActiveMonthId(jobsContent.months[0].id)
    }
  }, [activeMonthId, jobsContent.months])

  useEffect(() => {
    let cancelled = false

    fetch('/api/jobs')
      .then((response) => (response.ok ? (response.json() as Promise<JobsApiResponse>) : null))
      .then((data) => {
        if (cancelled || !data) {
          return
        }

        if (data.configured && data.jobs.length) {
          setLiveJobs(data.jobs)
        }
      })
      .catch(() => {
        // Live jobs are a progressive enhancement; the curated monthly list below still renders.
      })

    return () => {
      cancelled = true
    }
  }, [])

  const activeMonth = useMemo(
    () => jobsContent.months.find((month) => month.id === activeMonthId) ?? jobsContent.months[0] ?? null,
    [activeMonthId, jobsContent.months],
  )

  const isLive = Boolean(liveJobs && liveJobs.length)

  return (
    <main className="bg-white pt-28">
      <section className="section-space bg-stone-50">
        <div className="page-shell">
          <SectionHeading
            eyebrow={jobsContent.eyebrow}
            title={jobsContent.title}
            description={jobsContent.description}
            action={
              <ButtonLink
                icon={ArrowRight}
                to="/connect"
              >
                Request Career Support
              </ButtonLink>
            }
          />
        </div>
      </section>

      {isLive ? null : (
        <section className="section-space">
          <div className="page-shell space-y-6">
            {jobsContent.months.length ? (
              <>
                <div className="flex flex-wrap gap-3">
                  {jobsContent.months.map((month) => (
                    <button
                      className={cn(
                        'rounded-lg border px-5 py-3 text-sm font-semibold transition',
                        activeMonth?.id === month.id
                          ? 'border-bridge-orange bg-orange-50 text-bridge-orange'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50',
                      )}
                      key={month.id}
                      onClick={() => setActiveMonthId(month.id)}
                      type="button"
                    >
                      {month.label}
                    </button>
                  ))}
                </div>

                {activeMonth ? (
                  <div className="rounded-[3px] border border-slate-200 bg-white p-6 shadow-soft">
                    <div className="flex flex-col gap-5 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between">
                      <div className="space-y-3">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bridge-orange">
                          {activeMonth.label}
                        </p>
                        <h2 className="text-3xl font-semibold text-slate-900">
                          Top 10 Lagos job roles
                        </h2>
                        <p className="max-w-3xl text-base leading-7 text-slate-600">
                          {activeMonth.note}
                        </p>
                      </div>

                      <div className="rounded-[3px] bg-slate-50 px-4 py-3 text-sm text-slate-600">
                        Last updated: {activeMonth.lastUpdated}
                      </div>
                    </div>
                  </div>
                ) : null}
              </>
            ) : (
              <div className="rounded-[3px] border border-dashed border-slate-300 bg-white p-6 text-slate-600 shadow-soft">
                No jobs have been added yet. Check back soon.
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section-space bg-stone-50">
        <div className="page-shell">
          {isLive ? (
            <div className="mb-8 flex items-center gap-3 text-sm font-semibold text-slate-500">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              Live listings, updated automatically
            </div>
          ) : null}

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {isLive
              ? liveJobs?.map((job, index) => (
                  <article
                    className="flex h-full flex-col rounded-[3px] border border-slate-200 bg-white p-5 shadow-soft"
                    key={job.id}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[3px] bg-orange-50 text-lg font-bold text-bridge-orange">
                      {index + 1}
                    </div>

                    <div className="mt-5 space-y-3">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {job.company}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                          {job.title}
                        </h3>
                      </div>

                      <p className="leading-7 text-slate-600">{job.location}</p>
                    </div>

                    <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
                      {job.salary ? (
                        <div className="flex items-center justify-between gap-4">
                          <span>Salary</span>
                          <span className="font-medium text-right text-slate-900">{job.salary}</span>
                        </div>
                      ) : null}
                    </div>

                    <a
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-bridge-orange px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
                      href={job.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      View & Apply
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </article>
                ))
              : activeMonth?.jobs.map((job) => (
                  <article
                    className="flex h-full flex-col rounded-[3px] border border-slate-200 bg-white p-5 shadow-soft"
                    key={job.id}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-[3px] bg-orange-50 text-lg font-bold text-bridge-orange">
                      {job.rank}
                    </div>

                    <div className="mt-5 space-y-3">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                          {job.sector}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                          {job.title}
                        </h3>
                      </div>

                      <p className="flex-1 leading-7 text-slate-600">
                        {job.summary}
                      </p>
                    </div>

                    <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
                      <div className="flex items-center justify-between gap-4">
                        <span>Work mode</span>
                        <span className="font-medium text-slate-900">{job.workMode}</span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span>Salary band</span>
                        <span className="font-medium text-right text-slate-900">{job.salaryBand}</span>
                      </div>
                    </div>

                    <a
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-50"
                      href={indeedSearchUrl(job.title)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Search similar roles
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </article>
                )) ?? null}
          </div>
        </div>
      </section>
    </main>
  )
}
