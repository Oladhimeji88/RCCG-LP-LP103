import { ArrowRight } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { siteContent } from '../content/siteContent'
import { givingOptions } from '../lib/siteData'
import { cn } from '../lib/utils'

export function GivingPage() {
  return (
    <main className="bg-white pt-28">
      <section className="pb-16 pt-8">
        <Reveal className="page-shell mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-bridge-orange">
            Giving
          </p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
            {siteContent.giving.title}
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            {siteContent.giving.subtitle}
          </p>
        </Reveal>
      </section>

      <section className="pb-28">
        <div className="page-shell">
          <div className="mx-auto grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3">
            {givingOptions.map((option, index) => (
              <Reveal
                className="flex h-full flex-col bg-white p-8"
                delay={index * 100}
                key={option.id}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {option.detail}
                </p>
                <h2 className="mt-3 text-xl font-semibold text-slate-900">
                  {option.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {option.note}
                </p>
                <a
                  className={cn(
                    'mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-900 transition hover:gap-3 hover:text-bridge-orange',
                  )}
                  href={option.href}
                  rel="noreferrer"
                  target={option.href.startsWith('mailto:') ? undefined : '_blank'}
                >
                  {option.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
