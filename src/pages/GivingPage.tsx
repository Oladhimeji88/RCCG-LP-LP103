import { asset, givingOptions } from '../lib/siteData'

export function GivingPage() {
  return (
    <main className="bg-white pt-28">
      <section className="section-space pb-12">
        <div className="page-shell space-y-10">
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img
              alt="Giving hero"
              className="h-[24rem] w-full object-cover"
              src={asset('/gallery/bridge11.jpg')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bridge-dark/75 via-bridge-dark/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-center text-white sm:p-12">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Give with clarity and confidence
              </h1>
              <p className="mt-4 text-lg text-white/80">
                We removed unverified bank details and now point you to the safest
                current giving routes.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {givingOptions.map((option) => (
              <article
                className="flex h-full flex-col rounded-[3px] border border-slate-200 bg-white p-6 shadow-soft"
                key={option.id}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-bridge-orange">
                  {option.detail}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                  {option.title}
                </h2>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{option.note}</p>
                <a
                  className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-bridge-orange px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                  href={option.href}
                  rel="noreferrer"
                  target={option.href.startsWith('mailto:') ? undefined : '_blank'}
                >
                  {option.cta}
                </a>
              </article>
            ))}
          </div>

          <div className="rounded-[3px] border border-slate-200 bg-stone-50 p-6 text-slate-700 shadow-soft">
            <p className="text-lg leading-8">
              Public LP 103 banking information was not available from reliable
              online sources, so the site no longer displays copied account
              numbers. If you need local giving instructions, use the LP 103 email
              address listed on the site.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
