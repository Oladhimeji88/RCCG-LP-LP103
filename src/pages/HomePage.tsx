import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { ButtonLink } from '../components/ButtonLink'
import { SectionHeading } from '../components/SectionHeading'
import { siteContent } from '../content/siteContent'
import { useManagedSiteContent } from '../lib/contentStore'
import {
  asset,
  audioSermons,
  ctaLinks,
  homeHeroPhrases,
  livestream,
  services,
  sundaySermons,
} from '../lib/siteData'

type PrayerForm = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  content: string
}

const initialPrayerForm: PrayerForm = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  content: '',
}

const resolveContentImage = (value: string) =>
  value.startsWith('http') || value.startsWith('/')
    ? value
    : asset(value)

function HeroSection() {
  const managedSiteContent = useManagedSiteContent()
  const [activePhrase, setActivePhrase] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePhrase((current) => (current + 1) % homeHeroPhrases.length)
    }, 2500)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-bridge-dark text-white">
      <img
        alt="RCCG hero background"
        className="absolute inset-0 h-full w-full object-cover"
        src={asset('/headers/home.jpg')}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bridge-dark/60 via-bridge-dark/70 to-bridge-dark" />

      <div className="page-shell relative flex min-h-screen items-center justify-center py-32 text-center">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-white/70">
            {managedSiteContent.home.hero.eyebrow}
          </p>
          <h1 className="mx-auto max-w-5xl text-4xl font-black uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            {homeHeroPhrases[activePhrase]}
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/75">
            {managedSiteContent.home.hero.description}
          </p>
        </div>
      </div>
    </section>
  )
}

function UpcomingEventsSection() {
  const managedSiteContent = useManagedSiteContent()

  return (
    <section className="section-space bg-stone-50">
      <div className="page-shell space-y-10">
        <SectionHeading
          action={
            <ButtonLink
              iconSrc={asset('/icons/arrow-icon-9.svg')}
              to="/connect"
            >
              {managedSiteContent.home.upcomingEvents.ctaLabel}
            </ButtonLink>
          }
          eyebrow={managedSiteContent.home.upcomingEvents.eyebrow}
          title={managedSiteContent.home.upcomingEvents.title}
          description={managedSiteContent.home.upcomingEvents.description}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {managedSiteContent.home.upcomingEvents.items.map((event) => (
            <article
              className="flex h-full flex-col overflow-hidden rounded-[3px] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1"
              key={event.id}
            >
              <img
                alt={event.title}
                className="h-56 w-full object-cover"
                src={resolveContentImage(event.image)}
              />

              <div className="flex flex-1 flex-col p-6">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bridge-orange">
                    {event.label}
                  </p>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {event.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm text-slate-600">
                  <div className="flex items-center gap-3">
                    <img alt="" aria-hidden className="h-5 w-5" src={asset('/icons/calendar-icon.svg')} />
                    <span>{event.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img alt="" aria-hidden className="h-5 w-5" src={asset('/icons/location-icon.svg')} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!managedSiteContent.home.upcomingEvents.items.length ? (
          <div className="rounded-[3px] border border-dashed border-slate-300 bg-white p-6 text-slate-600 shadow-soft">
            No upcoming events have been added yet.
          </div>
        ) : null}
      </div>
    </section>
  )
}

function LivestreamSection() {
  return (
    <section className="bg-black py-10 text-white">
      <div className="page-shell">
        <SectionHeading
          align="center"
          className="mb-8"
          description={livestream.subtitle}
          invert
          title={livestream.title}
        />

        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            alt="Live stream preview"
            className="aspect-video w-full object-cover"
            src={livestream.previewImage}
          />
          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute inset-x-0 bottom-0 grid gap-5 p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="space-y-2 text-left">
              <p className="text-sm uppercase tracking-[0.2em] text-white/65">
                {livestream.serviceLabel}
              </p>
              <h2 className="text-3xl font-semibold">{livestream.serviceName}</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink
                external
                iconSrc={asset('/icons/arrow-icon-9.svg')}
                to={ctaLinks.watchLive}
              >
                {siteContent.home.livestream.primaryCta}
              </ButtonLink>
              <ButtonLink
                external
                to={ctaLinks.youtubeChannel}
                variant="secondary"
              >
                {siteContent.home.livestream.secondaryCta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionSection() {
  return (
    <section className="section-space bg-white">
      <div className="page-shell text-center">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="space-y-2 text-3xl font-medium leading-tight text-bridge-dark sm:text-4xl">
            {siteContent.home.mission.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <ButtonLink
              iconSrc={asset('/icons/arrow-icon-1.svg')}
              to="/about"
              variant="secondary"
            >
              {siteContent.home.mission.ctaLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="section-space bg-black text-white">
      <div className="page-shell space-y-10">
        <SectionHeading
          description={siteContent.home.services.description}
          invert
          title={siteContent.home.services.title}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              className="group overflow-hidden rounded-[3px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10"
              key={service.title}
            >
              <div className="overflow-hidden">
                <img
                  alt={service.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  src={service.image}
                />
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-white/70">{service.description}</p>
                </div>

                <div className="space-y-3 text-sm text-white/65">
                  <div className="flex items-center gap-3">
                    <img alt="" aria-hidden className="h-5 w-5" src={asset('/icons/calendar-icon.svg')} />
                    <span>{service.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img alt="" aria-hidden className="h-5 w-5" src={asset('/icons/location-icon.svg')} />
                    <span>{service.location}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ResourcesSection() {
  return (
    <>
      <section className="section-space bg-stone-50">
        <div className="page-shell space-y-10">
          <SectionHeading
            action={
              <ButtonLink
                external
                iconSrc={asset('/icons/arrow-icon-9.svg')}
                to={ctaLinks.rccgHome}
              >
                {siteContent.home.officialResources.ctaLabel}
              </ButtonLink>
            }
            description={siteContent.home.officialResources.description}
            title={siteContent.home.officialResources.title}
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {audioSermons.map((resource) => (
              <article
                className="rounded-[3px] border border-slate-200 bg-white p-6 shadow-soft"
                key={resource.id}
              >
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bridge-orange">
                    {resource.source}
                  </p>
                  <h3 className="text-xl font-semibold leading-tight text-slate-900">
                    {resource.name}
                  </h3>
                  <p className="leading-7 text-slate-600">{resource.description}</p>
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold text-bridge-orange transition hover:underline"
                    href={resource.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Open resource
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="page-shell space-y-10">
          <SectionHeading
            action={
              <ButtonLink
                external
                iconSrc={asset('/icons/arrow-icon-9.svg')}
                to={ctaLinks.yayaGlobal}
              >
                {siteContent.home.focusCards.ctaLabel}
              </ButtonLink>
            }
            description={siteContent.home.focusCards.description}
            title={siteContent.home.focusCards.title}
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {sundaySermons.map((item) => (
              <article
                className="overflow-hidden rounded-[3px] border border-slate-200 bg-white shadow-soft"
                key={item.id}
              >
                <img
                  alt={item.title}
                  className="h-72 w-full object-cover"
                  src={item.image}
                />
                <div className="space-y-4 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bridge-orange">
                    {item.label}
                  </p>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold text-bridge-orange transition hover:underline"
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Learn more
                    <img alt="" aria-hidden className="h-3 w-4" src={asset('/icons/arrow-icon-9.svg')} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function CounselingSection() {
  return (
    <section className="section-space text-white">
      <div className="page-shell">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <img
            alt="Counseling background"
            className="absolute inset-0 h-full w-full object-cover"
            src={resolveContentImage(siteContent.home.counseling.backgroundImage)}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/35" />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-6">
              <SectionHeading
                description={siteContent.home.counseling.description}
                invert
                title={siteContent.home.counseling.title}
              />

              <div className="flex flex-wrap gap-4">
                <ButtonLink
                  iconSrc={asset('/icons/arrow-icon-9.svg')}
                  to={ctaLinks.counseling}
                >
                  {siteContent.home.counseling.primaryCta}
                </ButtonLink>
                <ButtonLink
                  external
                  to={ctaLinks.yayaCounsel}
                  variant="secondary"
                >
                  {siteContent.home.counseling.secondaryCta}
                </ButtonLink>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-black/30">
              <img
                alt="LP 103 vision"
                className="h-full min-h-[18rem] w-full object-cover"
                src={resolveContentImage(siteContent.home.counseling.image)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactTeaserSection() {
  const [formState, setFormState] = useState(initialPrayerForm)
  const [notice, setNotice] = useState('')

  useEffect(() => {
    if (!notice) {
      return undefined
    }

    const timeout = window.setTimeout(() => setNotice(''), 3000)
    return () => window.clearTimeout(timeout)
  }, [notice])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNotice(siteContent.home.contact.notice)
    setFormState(initialPrayerForm)
  }

  return (
    <section className="section-space bg-bridge-dark text-white">
      <div className="page-shell">
        <div className="mx-auto max-w-3xl space-y-10 text-center">
          <SectionHeading
            align="center"
            description={siteContent.home.contact.description}
            invert
            title={siteContent.home.contact.title}
          />

          {notice ? (
            <div className="rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-medium text-white">
              {notice}
            </div>
          ) : null}

          <form className="space-y-5 text-left" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <input
                className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/45 focus:border-bridge-orange focus:outline-none"
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    firstName: event.target.value,
                  }))
                }
                placeholder="First Name"
                required
                type="text"
                value={formState.firstName}
              />
              <input
                className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/45 focus:border-bridge-orange focus:outline-none"
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    lastName: event.target.value,
                  }))
                }
                placeholder="Last Name"
                required
                type="text"
                value={formState.lastName}
              />
            </div>

            <input
              className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/45 focus:border-bridge-orange focus:outline-none"
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  email: event.target.value,
                }))
              }
              placeholder="Email"
              required
              type="email"
              value={formState.email}
            />

            <input
              className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/45 focus:border-bridge-orange focus:outline-none"
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  phoneNumber: event.target.value,
                }))
              }
              placeholder="Phone Number"
              required
              type="tel"
              value={formState.phoneNumber}
            />

            <textarea
              className="min-h-[9rem] w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-white/45 focus:border-bridge-orange focus:outline-none"
              onChange={(event) =>
                setFormState((current) => ({
                  ...current,
                  content: event.target.value,
                }))
              }
              placeholder="Tell us what you need"
              required
              value={formState.content}
            />

            <div className="flex justify-center">
              <button className="btn-primary justify-center" type="submit">
                <span>Send</span>
                <img
                  alt=""
                  aria-hidden
                  className="h-3 w-4 object-contain"
                  src={asset('/icons/arrow-icon-9.svg')}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <UpcomingEventsSection />
      <LivestreamSection />
      <MissionSection />
      <ServicesSection />
      <ResourcesSection />
      <CounselingSection />
      <ContactTeaserSection />
    </main>
  )
}
