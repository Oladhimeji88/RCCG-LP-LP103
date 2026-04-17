import { ButtonLink } from '../components/ButtonLink'
import { SectionHeading } from '../components/SectionHeading'
import { siteContent } from '../content/siteContent'
import { asset, ctaLinks, footerContacts } from '../lib/siteData'

export function CounselingPage() {
  const email = footerContacts.find((item) => item.label === 'Email')?.value ?? ''
  const support = footerContacts.find((item) => item.label === 'Support')?.value ?? ''

  return (
    <main className="bg-white pt-28">
      <section className="section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <SectionHeading
              eyebrow={siteContent.counseling.header.eyebrow}
              title={siteContent.counseling.header.title}
              description={siteContent.counseling.header.description}
            />

            <div className="flex flex-wrap gap-4">
              <ButtonLink
                iconSrc={asset('/icons/arrow-icon-9.svg')}
                to="/connect"
              >
                {siteContent.counseling.header.primaryCta}
              </ButtonLink>
              <ButtonLink
                className="justify-center"
                external
                to={`mailto:${email}`}
                variant="secondary"
              >
                {siteContent.counseling.header.secondaryCta}
              </ButtonLink>
              <ButtonLink
                className="justify-center"
                external
                to={ctaLinks.yayaCounsel}
                variant="secondary"
              >
                {siteContent.counseling.header.tertiaryCta}
              </ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-[3px] shadow-soft">
            <img
              alt="Counseling support"
              className="h-full min-h-[22rem] w-full object-cover"
              src={siteContent.counseling.header.image}
            />
          </div>
        </div>
      </section>

      <section className="section-space bg-stone-50">
        <div className="page-shell space-y-10">
          <SectionHeading
            title={siteContent.counseling.help.title}
            description={siteContent.counseling.help.description}
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.counseling.help.areas.map((area) => (
              <article
                className="rounded-[3px] border border-slate-200 bg-white p-6 shadow-soft"
                key={area.title}
              >
                <h3 className="text-xl font-semibold text-slate-900">{area.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            title={siteContent.counseling.expectations.title}
            description={siteContent.counseling.expectations.description}
          />

          <div className="grid gap-5 md:grid-cols-3">
            {siteContent.counseling.expectations.steps.map((step, index) => (
              <article
                className="rounded-[3px] border border-slate-200 bg-white p-6 shadow-soft"
                key={step.title}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bridge-orange">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-bridge-dark text-white">
        <div className="page-shell grid gap-8 rounded-[3px] border border-white/10 bg-white/5 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold leading-tight">
              {siteContent.counseling.finalCta.title}
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-white/75">
              {siteContent.counseling.finalCta.description}
            </p>
            <div className="space-y-2 text-white/85">
              <p>{email}</p>
              <p>{support}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <ButtonLink
              iconSrc={asset('/icons/arrow-icon-9.svg')}
              to="/connect"
            >
              {siteContent.counseling.finalCta.primaryCta}
            </ButtonLink>
            <ButtonLink
              className="justify-center"
              external
              to={`mailto:${email}`}
              variant="secondary"
            >
              {siteContent.counseling.finalCta.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}
