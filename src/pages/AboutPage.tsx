import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../components/ButtonLink'
import { SectionHeading } from '../components/SectionHeading'
import {
  asset,
  departments,
  departmentShowcaseImages,
  historyEntries,
  pastorates,
} from '../lib/siteData'
import { cn } from '../lib/utils'

export function AboutPage() {
  const [activeHistory, setActiveHistory] = useState(historyEntries[0].id)

  const selectedHistory = useMemo(
    () => historyEntries.find((entry) => entry.id === activeHistory) ?? historyEntries[0],
    [activeHistory],
  )

  return (
    <main className="bg-white pt-28">
      <section className="section-space">
        <div className="page-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {departmentShowcaseImages.slice(0, 2).map((image, index) => (
              <div
                className={cn(
                  'overflow-hidden rounded-[2rem] bg-slate-100 shadow-soft',
                  index === 0 ? 'sm:translate-y-8' : '',
                )}
                key={image}
              >
                <img
                  alt="RCCG department showcase"
                  className="h-full min-h-[18rem] w-full object-cover"
                  src={image}
                />
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <SectionHeading
              eyebrow="About LP 103"
              title="We exist to raise a generation that bridges gaps in society by redirecting hearts back to God."
              description="By connecting the Word to the world, we see transformed lives, stronger families, and communities renewed in Christ."
            />

            <div className="rounded-[3px] border border-slate-200 bg-slate-50 p-6 text-slate-700 shadow-soft">
              <p className="text-lg leading-8">
                We are a faith-driven community focused on spiritual growth,
                heartfelt worship, solid teaching, and active discipleship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-stone-50">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            {departmentShowcaseImages.slice(2).map((image) => (
              <div
                className="overflow-hidden rounded-[2rem] bg-white shadow-soft"
                key={image}
              >
                <img
                  alt="RCCG department showcase"
                  className="h-full min-h-[18rem] w-full object-cover"
                  src={image}
                />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="grid gap-6 rounded-[3px] bg-white p-8 shadow-soft">
              <div className="grid gap-3 border-b border-slate-200 pb-6 md:grid-cols-[12rem_1fr]">
                <h3 className="text-xl font-semibold text-slate-900">Our Mission</h3>
                <p className="text-lg leading-8 text-slate-700">
                  To raise a generation that bridges gaps in society by
                  redirecting hearts back to God.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-[12rem_1fr]">
                <h3 className="text-xl font-semibold text-slate-900">Our Vision</h3>
                <p className="text-lg leading-8 text-slate-700">
                  A thriving community of servant-leaders influencing every
                  sphere, including business, arts, government, and technology,
                  for His glory.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-soft">
              <img
                alt="LP 103 community"
                className="h-full min-h-[20rem] w-full object-cover"
                src={asset('/gallery/bridge1.png')}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell space-y-10">
          <SectionHeading
            align="center"
            title="Our History"
            description="From humble beginnings to a growing community of servant-leaders, every season has deepened our commitment to connect the Word to the world."
          />

          <div className="rounded-[3px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
              <div className="flex flex-wrap gap-3 lg:flex-col">
                {historyEntries.map((entry) => (
                  <button
                    className={cn(
                      'rounded-full px-5 py-3 text-sm font-semibold transition',
                      activeHistory === entry.id
                        ? 'bg-bridge-orange text-white shadow-lg shadow-orange-200'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200',
                    )}
                    key={entry.id}
                    onClick={() => setActiveHistory(entry.id)}
                    type="button"
                  >
                    {entry.year}
                  </button>
                ))}
              </div>

              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bridge-orange">
                    {selectedHistory.year}
                  </p>
                  <p className="text-2xl font-medium leading-tight text-slate-900">
                    {selectedHistory.text}
                  </p>
                </div>

                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    alt={`RCCG LP 103 history from ${selectedHistory.year}`}
                    className="h-full min-h-[18rem] w-full object-cover"
                    src={selectedHistory.image}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-stone-50">
        <div className="page-shell space-y-10">
          <SectionHeading
            align="center"
            title="Our Leadership"
            description="Meet the pastors stewarding the vision of Province 103 Youth, LP 103."
          />

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {pastorates.map((pastor) => (
              <article
                className="rounded-[3px] bg-white p-5 text-center shadow-soft"
                key={pastor.id}
              >
                <img
                  alt={pastor.name}
                  className="mx-auto h-72 w-full rounded-[3px] object-cover"
                  src={pastor.image}
                />
                <div className="mt-5 space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{pastor.name}</h3>
                  <p className="text-slate-600">{pastor.position}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            title="Departments & Ministries"
            description="There’s room for you here to serve, lead, and grow in purpose. Our departments are more than teams. They’re families on assignment."
            action={
              <ButtonLink
                iconSrc={asset('/icons/arrow-icon-9.svg')}
                to="/department"
              >
                Go to Departments
              </ButtonLink>
            }
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {departments.map((department) => (
              <article
                className="rounded-[3px] border border-slate-200 bg-white p-5 shadow-soft"
                key={department.id}
              >
                <img
                  alt={department.leader.name}
                  className="mb-4 h-40 w-full rounded-[3px] object-cover"
                  src={department.leader.image}
                />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bridge-orange">
                  {department.type}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {department.name}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                  {department.description}
                </p>
                <p className="mt-4 text-sm font-medium text-slate-700">
                  {department.leader.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-bridge-dark text-white">
        <div className="page-shell flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur lg:flex-row lg:text-left">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">
              Join The Community
            </p>
            <h2 className="text-3xl font-semibold leading-tight">
              Ready to call LP 103 home?
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <ButtonLink
              className="justify-center"
              iconSrc={asset('/icons/arrow-icon-9.svg')}
              to="/connect"
            >
              Connect with Us
            </ButtonLink>
            <Link
              className="btn-secondary justify-center"
              to="/branches"
            >
              Explore Branches
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
