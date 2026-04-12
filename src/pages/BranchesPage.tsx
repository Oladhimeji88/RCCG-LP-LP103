import { ButtonLink } from '../components/ButtonLink'
import { SectionHeading } from '../components/SectionHeading'
import { asset, branches } from '../lib/siteData'
import { cn } from '../lib/utils'

export function BranchesPage() {
  return (
    <main className="bg-white pt-28">
      <section className="section-space">
        <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="Our Zones"
            title="Find your next step into LP 103."
            description="Public zone listings for LP 103 are limited online, so this page points you toward the safest and most current ways to connect."
            action={
              <ButtonLink
                iconSrc={asset('/icons/arrow-icon-9.svg')}
                to="/connect"
              >
                Connect with Us
              </ButtonLink>
            }
          />

          <div className="grid gap-6 md:grid-cols-2">
            {branches.map((branch, index) => (
              <article
                className={cn(
                  'rounded-[3px] p-6 shadow-soft transition hover:-translate-y-1',
                  index === 0
                    ? 'bg-bridge-orange text-white'
                    : 'border border-slate-200 bg-white text-slate-900',
                )}
                key={branch.id}
              >
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">{branch.name}</h2>
                  <p
                    className={cn(
                      'leading-7',
                      index === 0 ? 'text-white/85' : 'text-slate-600',
                    )}
                  >
                    {branch.address}
                  </p>
                  <div
                    className={cn(
                      'inline-flex rounded-full px-4 py-2 text-sm font-semibold',
                      index === 0
                        ? 'bg-white/15 text-white'
                        : 'bg-slate-100 text-slate-700',
                    )}
                  >
                    {branch.details}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
