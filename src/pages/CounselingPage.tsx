import { ButtonLink } from '../components/ButtonLink'
import { SectionHeading } from '../components/SectionHeading'
import { asset, footerContacts } from '../lib/siteData'

const counselingAreas = [
  {
    title: 'Emotional Support',
    description:
      'A safe space to talk through pressure, fear, grief, or seasons that feel heavy.',
  },
  {
    title: 'Relationship Guidance',
    description:
      'Prayerful and practical support for friendships, family concerns, courtship, and marriage.',
  },
  {
    title: 'Purpose and Direction',
    description:
      'Encouragement for decisions around calling, education, work, and next steps.',
  },
  {
    title: 'Spiritual Care',
    description:
      'Biblical counsel rooted in compassion, discipleship, prayer, and renewed hope.',
  },
]

const counselingSteps = [
  {
    title: 'Reach Out',
    description:
      'Send us a message through the connect page and let us know how we can support you.',
  },
  {
    title: 'We Follow Up',
    description:
      'Our team reviews each request carefully and responds with the right next step.',
  },
  {
    title: 'Receive Care',
    description:
      'You will be guided with warmth, confidentiality, prayer, and practical counsel.',
  },
]

export function CounselingPage() {
  const email = footerContacts.find((item) => item.label === 'Email')?.value ?? ''
  const phone = footerContacts.find((item) => item.label === 'Phone')?.value ?? ''

  return (
    <main className="bg-white pt-28">
      <section className="section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Counseling"
              title="You do not have to walk through hard seasons alone."
              description="Province 103 Youth, The Bridge offers a caring environment where people can be heard, supported, prayed with, and guided with wisdom."
            />

            <div className="flex flex-wrap gap-4">
              <ButtonLink
                iconSrc={asset('/icons/arrow-icon-9.svg')}
                to="/connect"
              >
                Request Support
              </ButtonLink>
              <ButtonLink
                className="justify-center"
                external
                to={`mailto:${email}`}
                variant="secondary"
              >
                Email Us
              </ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-[3px] shadow-soft">
            <img
              alt="Counseling support"
              className="h-full min-h-[22rem] w-full object-cover"
              src={asset('/images/vision.jpg')}
            />
          </div>
        </div>
      </section>

      <section className="section-space bg-stone-50">
        <div className="page-shell space-y-10">
          <SectionHeading
            title="How We Can Help"
            description="Our counseling ministry is designed to offer soul care with empathy, confidentiality, and biblical perspective."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {counselingAreas.map((area) => (
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
            title="What To Expect"
            description="We want the process to feel clear, kind, and safe from the first step."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {counselingSteps.map((step, index) => (
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
              Ready to speak with someone?
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-white/75">
              Reach out through the connect page, email us directly, or call for
              guidance on the next step.
            </p>
            <div className="space-y-2 text-white/85">
              <p>{email}</p>
              <p>{phone}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <ButtonLink
              iconSrc={asset('/icons/arrow-icon-9.svg')}
              to="/connect"
            >
              Go to Connect
            </ButtonLink>
            <ButtonLink
              className="justify-center"
              external
              to={`mailto:${email}`}
              variant="secondary"
            >
              Send Email
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  )
}
