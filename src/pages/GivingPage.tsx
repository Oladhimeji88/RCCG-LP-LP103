import { useEffect, useMemo, useState } from 'react'
import { asset, givingCategories } from '../lib/siteData'
import { cn } from '../lib/utils'

const givingColorMap: Record<
  string,
  {
    border: string
    bg: string
    text: string
  }
> = {
  Tithe: {
    border: 'border-emerald-500',
    bg: 'bg-emerald-50',
    text: 'text-emerald-800',
  },
  Offering: {
    border: 'border-bridge-orange',
    bg: 'bg-orange-50',
    text: 'text-bridge-orange',
  },
  Welfare: {
    border: 'border-bridge-dark',
    bg: 'bg-sky-50',
    text: 'text-bridge-dark',
  },
  Project: {
    border: 'border-slate-900',
    bg: 'bg-slate-100',
    text: 'text-slate-900',
  },
}

export function GivingPage() {
  const [activeCategory, setActiveCategory] = useState(givingCategories[0]?.name ?? '')
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const activeGroup = useMemo(
    () =>
      givingCategories.find((category) => category.name === activeCategory) ??
      givingCategories[0],
    [activeCategory],
  )

  useEffect(() => {
    if (copiedId === null) {
      return undefined
    }

    const timeout = window.setTimeout(() => setCopiedId(null), 1800)
    return () => window.clearTimeout(timeout)
  }, [copiedId])

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
                God&apos;s generosity never runs dry
              </h1>
              <p className="mt-4 text-lg text-white/80">
                Let&apos;s be rivers, not reservoirs.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {givingCategories.map((category) => (
              <button
                className={cn(
                  'rounded-full px-5 py-3 text-sm font-semibold transition',
                  activeCategory === category.name
                    ? 'bg-bridge-orange text-white shadow-lg shadow-orange-200'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200',
                )}
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                type="button"
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid gap-5">
            {activeGroup.accounts.map((account) => {
              const tone = givingColorMap[activeGroup.name] ?? {
                border: 'border-slate-200',
                bg: 'bg-white',
                text: 'text-slate-900',
              }

              return (
                <article
                  className={cn(
                    'flex flex-col gap-4 rounded-[3px] border-l-4 px-5 py-5 shadow-soft sm:flex-row sm:items-center sm:justify-between',
                    tone.border,
                    tone.bg,
                    tone.text,
                  )}
                  key={account.id}
                >
                  <div className="space-y-1">
                    <p className="text-lg font-semibold">{account.name}</p>
                    <p className="text-sm sm:text-base">
                      {account.accountNumber} — {account.bank}
                    </p>
                  </div>

                  <button
                    className="inline-flex w-fit rounded-full border border-current/20 px-4 py-2 text-sm font-semibold transition hover:bg-black/5"
                    onClick={() => {
                      navigator.clipboard.writeText(account.accountNumber)
                      setCopiedId(account.id)
                    }}
                    type="button"
                  >
                    {copiedId === account.id ? 'Copied' : 'Copy account number'}
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
