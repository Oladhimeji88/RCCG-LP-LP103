import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from 'react'
import { Link } from 'react-router-dom'
import {
  ADMIN_EMAIL,
  loginAdmin,
  logoutAdmin,
  resetManagedJobsContent,
  resetManagedSiteContent,
  saveManagedJobsContent,
  saveManagedSiteContent,
  useAdminSession,
  useManagedJobsContent,
  useManagedSiteContent,
} from '../lib/contentStore'
import type { LagosJobEntry, LagosJobsMonth } from '../content/jobsContent'
import type { SiteContent } from '../content/siteContent'

type AdminSectionProps = {
  title: string
  description: string
  children: ReactNode
  actions?: ReactNode
}

type UpcomingEvent = SiteContent['home']['upcomingEvents']['items'][number]

type ImageInputFieldProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

function AdminSection({ title, description, children, actions }: AdminSectionProps) {
  return (
    <section className="rounded-[3px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
          <p className="max-w-3xl text-sm leading-7 text-slate-600">{description}</p>
        </div>
        {actions}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  )
}

const isUploadedImage = (value: string) => value.startsWith('data:')

const readFileAsDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => resolve(String(reader.result ?? ''))
    reader.onerror = () => reject(new Error('Unable to read the selected file.'))
    reader.readAsDataURL(file)
  })

const optimizeImageFile = async (file: File) => {
  if (file.type === 'image/svg+xml' || file.type === 'image/gif') {
    return readFileAsDataUrl(file)
  }

  const objectUrl = URL.createObjectURL(file)

  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const nextImage = new Image()

      nextImage.onload = () => resolve(nextImage)
      nextImage.onerror = () => reject(new Error('Unable to load the selected image.'))
      nextImage.src = objectUrl
    })

    const maxWidth = 1400
    const maxHeight = 1400
    const scale = Math.min(maxWidth / image.width, maxHeight / image.height, 1)
    const canvas = document.createElement('canvas')
    const width = Math.max(1, Math.round(image.width * scale))
    const height = Math.max(1, Math.round(image.height * scale))

    canvas.width = width
    canvas.height = height

    const context = canvas.getContext('2d')

    if (!context) {
      return readFileAsDataUrl(file)
    }

    context.drawImage(image, 0, 0, width, height)

    return canvas.toDataURL(
      file.type === 'image/png' ? 'image/png' : 'image/jpeg',
      file.type === 'image/png' ? undefined : 0.82,
    )
  } finally {
    URL.revokeObjectURL(objectUrl)
  }
}

function ImageInputField({ label, value, onChange }: ImageInputFieldProps) {
  const [uploadError, setUploadError] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const uploadedFromDevice = isUploadedImage(value)
  const previewValue = value || '/brand/rccg-logo.png'

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]

    if (!selectedFile) {
      return
    }

    setIsUploading(true)
    setUploadError('')

    try {
      const optimizedImage = await optimizeImageFile(selectedFile)
      onChange(optimizedImage)
    } catch {
      setUploadError('The image could not be uploaded. Try another image file.')
    } finally {
      setIsUploading(false)
      event.target.value = ''
    }
  }

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <span className="text-sm font-semibold text-slate-700">{label}</span>
        <div className="overflow-hidden rounded-[3px] border border-slate-200 bg-slate-100">
          <img
            alt={label}
            className="h-44 w-full object-cover"
            src={previewValue}
          />
        </div>
      </div>

      <input
        className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
        onChange={(event) => onChange(event.target.value)}
        placeholder={
          uploadedFromDevice
            ? 'Uploaded image stored in this browser. Paste a URL here to replace it.'
            : 'Paste an image URL or keep using upload from device.'
        }
        type="text"
        value={uploadedFromDevice ? '' : value}
      />

      <div className="flex flex-wrap items-center gap-3">
        <label className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
          <input
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            type="file"
          />
          {isUploading ? 'Uploading image...' : 'Upload From Device'}
        </label>

        {uploadedFromDevice ? (
          <button
            className="inline-flex items-center justify-center rounded-lg border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            onClick={() => onChange('')}
            type="button"
          >
            Remove Uploaded Image
          </button>
        ) : null}
      </div>

      <p className="text-xs leading-6 text-slate-500">
        Uploaded images are saved in this browser and will show on the website after you click save.
      </p>

      {uploadError ? (
        <p className="text-sm text-red-600">{uploadError}</p>
      ) : null}
    </div>
  )
}

const buildEmptyEvent = (fallbackImage: string, fallbackLocation: string): UpcomingEvent => ({
  id: Date.now(),
  label: 'New event',
  title: 'New event title',
  schedule: 'Add schedule',
  description: 'Add event description',
  location: fallbackLocation,
  image: fallbackImage || '/brand/rccg-logo.png',
})

const buildEmptyJob = (rank: number): LagosJobEntry => ({
  id: Date.now() + rank,
  rank,
  title: 'New job title',
  sector: 'Sector',
  hiringScore: 75,
  monthlyChange: 1,
  workMode: 'Hybrid',
  salaryBand: 'Add salary band',
  summary: 'Add job summary',
})

const buildEmptyMonth = (): LagosJobsMonth => {
  const now = new Date()
  const monthLabel = now.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
  const monthName = now.toLocaleDateString('en-US', { month: 'long' })
  const lastUpdated = now.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return {
    id: `${now.getFullYear()}-${now.getMonth() + 1}-${Date.now()}`,
    label: monthLabel,
    month: monthName,
    year: now.getFullYear(),
    lastUpdated,
    note: 'Add a short note for this month.',
    jobs: [buildEmptyJob(1)],
  }
}

export function AdminPage() {
  const session = useAdminSession()
  const managedSiteContent = useManagedSiteContent()
  const managedJobsContent = useManagedJobsContent()
  const [email, setEmail] = useState(ADMIN_EMAIL)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const [siteDraft, setSiteDraft] = useState<SiteContent>(managedSiteContent)
  const [jobsDraft, setJobsDraft] = useState(managedJobsContent)
  const [activeMonthId, setActiveMonthId] = useState(managedJobsContent.months[0]?.id ?? '')

  useEffect(() => {
    if (!notice) {
      return undefined
    }

    const timeout = window.setTimeout(() => setNotice(''), 3000)
    return () => window.clearTimeout(timeout)
  }, [notice])

  useEffect(() => {
    if (!session) {
      return
    }

    setSiteDraft(managedSiteContent)
  }, [managedSiteContent, session])

  useEffect(() => {
    if (!session) {
      return
    }

    setJobsDraft(managedJobsContent)
  }, [managedJobsContent, session])

  useEffect(() => {
    if (!jobsDraft.months.length) {
      setActiveMonthId('')
      return
    }

    if (!jobsDraft.months.some((month) => month.id === activeMonthId)) {
      setActiveMonthId(jobsDraft.months[0].id)
    }
  }, [activeMonthId, jobsDraft.months])

  const activeMonthIndex = useMemo(
    () => jobsDraft.months.findIndex((month) => month.id === activeMonthId),
    [activeMonthId, jobsDraft.months],
  )

  const activeMonth = activeMonthIndex >= 0 ? jobsDraft.months[activeMonthIndex] : null

  const updateBrandField = (field: keyof SiteContent['brand'], value: string) => {
    setSiteDraft((current) => ({
      ...current,
      brand: {
        ...current.brand,
        [field]: value,
      },
    }))
  }

  const updateHeroField = (field: 'eyebrow' | 'description', value: string) => {
    setSiteDraft((current) => ({
      ...current,
      home: {
        ...current.home,
        hero: {
          ...current.home.hero,
          [field]: value,
        },
      },
    }))
  }

  const updateUpcomingField = (
    field: 'eyebrow' | 'title' | 'description' | 'ctaLabel',
    value: string,
  ) => {
    setSiteDraft((current) => ({
      ...current,
      home: {
        ...current.home,
        upcomingEvents: {
          ...current.home.upcomingEvents,
          [field]: value,
        },
      },
    }))
  }

  const updateUpcomingEvent = (
    index: number,
    field: keyof UpcomingEvent,
    value: string | number,
  ) => {
    setSiteDraft((current) => ({
      ...current,
      home: {
        ...current.home,
        upcomingEvents: {
          ...current.home.upcomingEvents,
          items: current.home.upcomingEvents.items.map((item, itemIndex) =>
            itemIndex === index
              ? {
                ...item,
                [field]: value,
              }
              : item,
          ),
        },
      },
    }))
  }

  const addUpcomingEvent = () => {
    setSiteDraft((current) => ({
      ...current,
      home: {
        ...current.home,
        upcomingEvents: {
          ...current.home.upcomingEvents,
          items: [
            ...current.home.upcomingEvents.items,
            buildEmptyEvent(
              current.home.upcomingEvents.items[0]?.image ?? '/brand/rccg-logo.png',
              current.brand.address,
            ),
          ],
        },
      },
    }))
  }

  const removeUpcomingEvent = (index: number) => {
    setSiteDraft((current) => ({
      ...current,
      home: {
        ...current.home,
        upcomingEvents: {
          ...current.home.upcomingEvents,
          items: current.home.upcomingEvents.items.filter((_, itemIndex) => itemIndex !== index),
        },
      },
    }))
  }

  const updateJobsField = (
    field: keyof typeof jobsDraft,
    value: string | LagosJobsMonth[],
  ) => {
    setJobsDraft((current) => ({
      ...current,
      [field]: value,
    }))
  }

  const updateMonthField = (
    monthIndex: number,
    field: keyof LagosJobsMonth,
    value: string | number | LagosJobEntry[],
  ) => {
    setJobsDraft((current) => ({
      ...current,
      months: current.months.map((month, index) =>
        index === monthIndex
          ? {
            ...month,
            [field]: value,
          }
          : month,
      ),
    }))
  }

  const updateJobField = (
    monthIndex: number,
    jobIndex: number,
    field: keyof LagosJobEntry,
    value: string | number,
  ) => {
    setJobsDraft((current) => ({
      ...current,
      months: current.months.map((month, index) =>
        index === monthIndex
          ? {
            ...month,
            jobs: month.jobs.map((job, indexValue) =>
              indexValue === jobIndex
                ? {
                  ...job,
                  [field]: value,
                }
                : job,
            ),
          }
          : month,
      ),
    }))
  }

  const addMonth = () => {
    const nextMonth = buildEmptyMonth()

    setJobsDraft((current) => ({
      ...current,
      months: [...current.months, nextMonth],
    }))
    setActiveMonthId(nextMonth.id)
  }

  const removeMonth = (monthIndex: number) => {
    setJobsDraft((current) => ({
      ...current,
      months: current.months.filter((_, index) => index !== monthIndex),
    }))
  }

  const addJobToMonth = (monthIndex: number) => {
    setJobsDraft((current) => ({
      ...current,
      months: current.months.map((month, index) =>
        index === monthIndex
          ? {
            ...month,
            jobs: [...month.jobs, buildEmptyJob(month.jobs.length + 1)],
          }
          : month,
      ),
    }))
  }

  const removeJobFromMonth = (monthIndex: number, jobIndex: number) => {
    setJobsDraft((current) => ({
      ...current,
      months: current.months.map((month, index) =>
        index === monthIndex
          ? {
            ...month,
            jobs: month.jobs.filter((_, indexValue) => indexValue !== jobIndex),
          }
          : month,
      ),
    }))
  }

  const handleSiteSave = () => {
    const result = saveManagedSiteContent(siteDraft)

    if (!result.ok) {
      setError(result.error ?? 'Website content could not be saved.')
      return
    }

    setError('')
    setNotice('Website content saved.')
  }

  const handleJobsSave = () => {
    const result = saveManagedJobsContent(jobsDraft)

    if (!result.ok) {
      setError(result.error ?? 'Jobs content could not be saved.')
      return
    }

    setError('')
    setNotice('Jobs content saved.')
  }

  const handleResetSite = () => {
    if (!window.confirm('Reset website content back to the current default build?')) {
      return
    }

    resetManagedSiteContent()
    setNotice('Website content reset to defaults.')
  }

  const handleResetJobs = () => {
    if (!window.confirm('Reset jobs back to the starter data?')) {
      return
    }

    resetManagedJobsContent()
    setNotice('Jobs content reset to defaults.')
  }

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const loggedIn = loginAdmin(email, password)

    if (!loggedIn) {
      setError('Incorrect email or password.')
      return
    }

    setError('')
    setPassword('')
  }

  if (!session) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-10">
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/45">
              LP 103 Admin
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Hidden website editor for LP 103.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/70">
              Use this page to update upcoming events, jobs, and key website details that show on the live site.
            </p>
            <div className="rounded-[3px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/70">
              Sign in with the LP 103 email and password. This is a client-side lock for the current React build, so it is helpful for lightweight editing but not the same as secure server-side authentication.
            </div>
          </div>

          <div className="rounded-[3px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                  Email
                </label>
                <input
                  className="w-full rounded-[3px] border border-white/15 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-bridge-orange"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  required
                  type="email"
                  value={email}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold uppercase tracking-[0.2em] text-white/45">
                  Password
                </label>
                <input
                  className="w-full rounded-[3px] border border-white/15 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-bridge-orange"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  required
                  type="password"
                  value={password}
                />
              </div>

              {error ? (
                <div className="rounded-[3px] bg-red-500/15 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              ) : null}

              <button className="btn-primary w-full justify-center" type="submit">
                Sign In
              </button>

              <p className="text-xs leading-6 text-white/50">
                Login email: {ADMIN_EMAIL}
              </p>
            </form>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-stone-50 px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-5 rounded-[3px] bg-slate-950 p-6 text-white shadow-soft sm:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/45">
              LP 103 Admin
            </p>
            <h1 className="text-3xl font-semibold sm:text-4xl">
              Edit the live website content from one place.
            </h1>
            <p className="max-w-3xl text-base leading-7 text-white/70">
              Save website settings, update upcoming events, and manage the Lagos jobs page. Changes are stored in this browser and reflected on the site immediately after save.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              className="btn-secondary justify-center"
              to="/"
            >
              View Website
            </Link>
            <button
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              onClick={() => logoutAdmin()}
              type="button"
            >
              Log Out
            </button>
          </div>
        </div>

        {notice ? (
          <div className="rounded-[3px] bg-emerald-500 px-4 py-3 text-sm font-medium text-white shadow-soft">
            {notice}
          </div>
        ) : null}

        {error ? (
          <div className="rounded-[3px] bg-red-50 px-4 py-3 text-sm font-medium text-red-700 shadow-soft">
            {error}
          </div>
        ) : null}

        <AdminSection
          title="Website Settings"
          description="Edit the core LP 103 details that appear in the footer, contact sections, and homepage hero."
          actions={
            <div className="flex flex-wrap gap-3">
              <button
                className="btn-secondary justify-center"
                onClick={handleResetSite}
                type="button"
              >
                Reset Website
              </button>
              <button
                className="btn-primary justify-center"
                onClick={handleSiteSave}
                type="button"
              >
                Save Website
              </button>
            </div>
          }
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Website Email</span>
              <input
                className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                onChange={(event) => updateBrandField('email', event.target.value)}
                type="email"
                value={siteDraft.brand.email}
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Website Address</span>
              <input
                className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                onChange={(event) => updateBrandField('address', event.target.value)}
                type="text"
                value={siteDraft.brand.address}
              />
            </label>

            <label className="space-y-2 lg:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Support Text</span>
              <input
                className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                onChange={(event) => updateBrandField('supportText', event.target.value)}
                type="text"
                value={siteDraft.brand.supportText}
              />
            </label>

            <label className="space-y-2 lg:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Hero Eyebrow</span>
              <input
                className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                onChange={(event) => updateHeroField('eyebrow', event.target.value)}
                type="text"
                value={siteDraft.home.hero.eyebrow}
              />
            </label>

            <label className="space-y-2 lg:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Hero Description</span>
              <textarea
                className="min-h-[9rem] w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                onChange={(event) => updateHeroField('description', event.target.value)}
                value={siteDraft.home.hero.description}
              />
            </label>
          </div>
        </AdminSection>

        <AdminSection
          title="Upcoming Events"
          description="Add, remove, and edit the event cards that appear right after the homepage hero section."
          actions={
            <div className="flex flex-wrap gap-3">
              <button
                className="btn-secondary justify-center"
                onClick={addUpcomingEvent}
                type="button"
              >
                Add Event
              </button>
              <button
                className="btn-primary justify-center"
                onClick={handleSiteSave}
                type="button"
              >
                Save Events
              </button>
            </div>
          }
        >
          <div className="grid gap-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Section Eyebrow</span>
                <input
                  className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                  onChange={(event) => updateUpcomingField('eyebrow', event.target.value)}
                  type="text"
                  value={siteDraft.home.upcomingEvents.eyebrow}
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">CTA Label</span>
                <input
                  className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                  onChange={(event) => updateUpcomingField('ctaLabel', event.target.value)}
                  type="text"
                  value={siteDraft.home.upcomingEvents.ctaLabel}
                />
              </label>

              <label className="space-y-2 lg:col-span-2">
                <span className="text-sm font-semibold text-slate-700">Section Title</span>
                <input
                  className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                  onChange={(event) => updateUpcomingField('title', event.target.value)}
                  type="text"
                  value={siteDraft.home.upcomingEvents.title}
                />
              </label>

              <label className="space-y-2 lg:col-span-2">
                <span className="text-sm font-semibold text-slate-700">Section Description</span>
                <textarea
                  className="min-h-[8rem] w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                  onChange={(event) => updateUpcomingField('description', event.target.value)}
                  value={siteDraft.home.upcomingEvents.description}
                />
              </label>
            </div>

            <div className="grid gap-6">
              {siteDraft.home.upcomingEvents.items.map((eventItem, index) => (
                <div
                  className="rounded-[3px] border border-slate-200 bg-stone-50 p-5"
                  key={eventItem.id}
                >
                  <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold text-slate-900">
                      Event {index + 1}
                    </h3>
                    <button
                      className="inline-flex items-center justify-center rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                      onClick={() => removeUpcomingEvent(index)}
                      type="button"
                    >
                      Remove Event
                    </button>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-slate-700">Label</span>
                      <input
                        className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                        onChange={(event) => updateUpcomingEvent(index, 'label', event.target.value)}
                        type="text"
                        value={eventItem.label}
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-slate-700">Schedule</span>
                      <input
                        className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                        onChange={(event) => updateUpcomingEvent(index, 'schedule', event.target.value)}
                        type="text"
                        value={eventItem.schedule}
                      />
                    </label>

                    <label className="space-y-2 lg:col-span-2">
                      <span className="text-sm font-semibold text-slate-700">Title</span>
                      <input
                        className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                        onChange={(event) => updateUpcomingEvent(index, 'title', event.target.value)}
                        type="text"
                        value={eventItem.title}
                      />
                    </label>

                    <label className="space-y-2 lg:col-span-2">
                      <span className="text-sm font-semibold text-slate-700">Description</span>
                      <textarea
                        className="min-h-[8rem] w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                        onChange={(event) => updateUpcomingEvent(index, 'description', event.target.value)}
                        value={eventItem.description}
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-slate-700">Location</span>
                      <input
                        className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                        onChange={(event) => updateUpcomingEvent(index, 'location', event.target.value)}
                        type="text"
                        value={eventItem.location}
                      />
                    </label>

                    <ImageInputField
                      label="Event Image"
                      onChange={(value) => updateUpcomingEvent(index, 'image', value)}
                      value={eventItem.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AdminSection>

        <AdminSection
          title="Jobs Page"
          description="Manage the jobs page title, monthly groups, and the top job roles shown on the public website."
          actions={
            <div className="flex flex-wrap gap-3">
              <button
                className="btn-secondary justify-center"
                onClick={handleResetJobs}
                type="button"
              >
                Reset Jobs
              </button>
              <button
                className="btn-secondary justify-center"
                onClick={addMonth}
                type="button"
              >
                Add Month
              </button>
              <button
                className="btn-primary justify-center"
                onClick={handleJobsSave}
                type="button"
              >
                Save Jobs
              </button>
            </div>
          }
        >
          <div className="grid gap-6">
            <div className="grid gap-6 lg:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Jobs Eyebrow</span>
                <input
                  className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                  onChange={(event) => updateJobsField('eyebrow', event.target.value)}
                  type="text"
                  value={jobsDraft.eyebrow}
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Cadence Label</span>
                <input
                  className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                  onChange={(event) => updateJobsField('cadenceLabel', event.target.value)}
                  type="text"
                  value={jobsDraft.cadenceLabel}
                />
              </label>

              <label className="space-y-2 lg:col-span-2">
                <span className="text-sm font-semibold text-slate-700">Jobs Title</span>
                <input
                  className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                  onChange={(event) => updateJobsField('title', event.target.value)}
                  type="text"
                  value={jobsDraft.title}
                />
              </label>

              <label className="space-y-2 lg:col-span-2">
                <span className="text-sm font-semibold text-slate-700">Jobs Description</span>
                <textarea
                  className="min-h-[8rem] w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                  onChange={(event) => updateJobsField('description', event.target.value)}
                  value={jobsDraft.description}
                />
              </label>

              <label className="space-y-2 lg:col-span-2">
                <span className="text-sm font-semibold text-slate-700">Sample Notice</span>
                <textarea
                  className="min-h-[7rem] w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                  onChange={(event) => updateJobsField('sampleNotice', event.target.value)}
                  value={jobsDraft.sampleNotice}
                />
              </label>
            </div>

            <div className="flex flex-wrap gap-3">
              {jobsDraft.months.map((month) => (
                <button
                  className={`rounded-lg border px-5 py-3 text-sm font-semibold transition ${
                    activeMonthId === month.id
                      ? 'border-bridge-orange bg-orange-50 text-bridge-orange'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                  key={month.id}
                  onClick={() => setActiveMonthId(month.id)}
                  type="button"
                >
                  {month.label}
                </button>
              ))}
            </div>

            {activeMonth && activeMonthIndex >= 0 ? (
              <div className="grid gap-6">
                <div className="rounded-[3px] border border-slate-200 bg-stone-50 p-5">
                  <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {activeMonth.label}
                    </h3>
                    <button
                      className="inline-flex items-center justify-center rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                      onClick={() => removeMonth(activeMonthIndex)}
                      type="button"
                    >
                      Remove Month
                    </button>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-slate-700">Label</span>
                      <input
                        className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                        onChange={(event) => updateMonthField(activeMonthIndex, 'label', event.target.value)}
                        type="text"
                        value={activeMonth.label}
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-slate-700">Last Updated</span>
                      <input
                        className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                        onChange={(event) => updateMonthField(activeMonthIndex, 'lastUpdated', event.target.value)}
                        type="text"
                        value={activeMonth.lastUpdated}
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-slate-700">Month Name</span>
                      <input
                        className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                        onChange={(event) => updateMonthField(activeMonthIndex, 'month', event.target.value)}
                        type="text"
                        value={activeMonth.month}
                      />
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-semibold text-slate-700">Year</span>
                      <input
                        className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                        onChange={(event) => updateMonthField(activeMonthIndex, 'year', Number(event.target.value || 0))}
                        type="number"
                        value={activeMonth.year}
                      />
                    </label>

                    <label className="space-y-2 lg:col-span-2">
                      <span className="text-sm font-semibold text-slate-700">Month Note</span>
                      <textarea
                        className="min-h-[8rem] w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                        onChange={(event) => updateMonthField(activeMonthIndex, 'note', event.target.value)}
                        value={activeMonth.note}
                      />
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="btn-secondary justify-center"
                    onClick={() => addJobToMonth(activeMonthIndex)}
                    type="button"
                  >
                    Add Job
                  </button>
                </div>

                <div className="grid gap-5">
                  {activeMonth.jobs.map((job, jobIndex) => (
                    <div
                      className="rounded-[3px] border border-slate-200 bg-white p-5"
                      key={job.id}
                    >
                      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="text-lg font-semibold text-slate-900">
                          Job {jobIndex + 1}
                        </h4>
                        <button
                          className="inline-flex items-center justify-center rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                          onClick={() => removeJobFromMonth(activeMonthIndex, jobIndex)}
                          type="button"
                        >
                          Remove Job
                        </button>
                      </div>

                      <div className="grid gap-4 lg:grid-cols-2">
                        <label className="space-y-2">
                          <span className="text-sm font-semibold text-slate-700">Rank</span>
                          <input
                            className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                            onChange={(event) => updateJobField(activeMonthIndex, jobIndex, 'rank', Number(event.target.value || 0))}
                            type="number"
                            value={job.rank}
                          />
                        </label>

                        <label className="space-y-2">
                          <span className="text-sm font-semibold text-slate-700">Hiring Score</span>
                          <input
                            className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                            max={100}
                            min={0}
                            onChange={(event) => updateJobField(activeMonthIndex, jobIndex, 'hiringScore', Number(event.target.value || 0))}
                            type="number"
                            value={job.hiringScore}
                          />
                        </label>

                        <label className="space-y-2 lg:col-span-2">
                          <span className="text-sm font-semibold text-slate-700">Job Title</span>
                          <input
                            className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                            onChange={(event) => updateJobField(activeMonthIndex, jobIndex, 'title', event.target.value)}
                            type="text"
                            value={job.title}
                          />
                        </label>

                        <label className="space-y-2">
                          <span className="text-sm font-semibold text-slate-700">Sector</span>
                          <input
                            className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                            onChange={(event) => updateJobField(activeMonthIndex, jobIndex, 'sector', event.target.value)}
                            type="text"
                            value={job.sector}
                          />
                        </label>

                        <label className="space-y-2">
                          <span className="text-sm font-semibold text-slate-700">Monthly Change</span>
                          <input
                            className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                            onChange={(event) => updateJobField(activeMonthIndex, jobIndex, 'monthlyChange', Number(event.target.value || 0))}
                            type="number"
                            value={job.monthlyChange}
                          />
                        </label>

                        <label className="space-y-2">
                          <span className="text-sm font-semibold text-slate-700">Work Mode</span>
                          <select
                            className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                            onChange={(event) => updateJobField(activeMonthIndex, jobIndex, 'workMode', event.target.value)}
                            value={job.workMode}
                          >
                            <option value="On-site">On-site</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Remote">Remote</option>
                          </select>
                        </label>

                        <label className="space-y-2">
                          <span className="text-sm font-semibold text-slate-700">Salary Band</span>
                          <input
                            className="w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                            onChange={(event) => updateJobField(activeMonthIndex, jobIndex, 'salaryBand', event.target.value)}
                            type="text"
                            value={job.salaryBand}
                          />
                        </label>

                        <label className="space-y-2 lg:col-span-2">
                          <span className="text-sm font-semibold text-slate-700">Summary</span>
                          <textarea
                            className="min-h-[8rem] w-full rounded-[3px] border border-slate-200 px-4 py-3 outline-none transition focus:border-bridge-orange"
                            onChange={(event) => updateJobField(activeMonthIndex, jobIndex, 'summary', event.target.value)}
                            value={job.summary}
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-[3px] border border-dashed border-slate-300 bg-stone-50 p-6 text-slate-600">
                No jobs month has been added yet. Use the button above to create one.
              </div>
            )}
          </div>
        </AdminSection>
      </div>
    </main>
  )
}
