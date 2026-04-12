import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { asset, ctaLinks, navItems } from '../lib/siteData'
import { cn } from '../lib/utils'

export function SiteHeader() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isSolid = !isHome || isScrolled || menuOpen
  const navTextClass = isSolid ? 'text-slate-700' : 'text-white'

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isSolid
          ? 'bg-white/95 shadow-lg shadow-slate-300/25 backdrop-blur'
          : 'bg-transparent',
      )}
    >
      <div className="page-shell">
        <div className="flex items-center justify-between py-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) =>
              item.external ? (
                <a
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-bridge-orange',
                    navTextClass,
                  )}
                  href={item.href}
                  key={item.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      'text-sm font-medium transition-colors hover:text-bridge-orange',
                      navTextClass,
                      isActive && 'text-bridge-orange',
                    )
                  }
                  key={item.label}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <Link
            aria-label="Go to homepage"
            className="justify-self-center"
            to="/"
          >
            <img
              alt="Redeemed Christian Church of God logo"
              className={cn(
                'h-12 w-12 rounded-full bg-white object-contain p-1 shadow-md sm:h-14 sm:w-14',
                !isSolid && 'shadow-white/10',
              )}
              src="/brand/rccg-logo.png"
            />
          </Link>

          <div className="hidden items-center justify-end gap-4 lg:flex">
            <Link
              className={cn(
                'inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition',
                isSolid
                  ? 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  : 'bg-white text-slate-900 hover:bg-slate-100',
              )}
              to={ctaLinks.giving}
            >
              <img alt="" aria-hidden className="h-5 w-5" src={asset('/icons/login-icon.svg')} />
              Giving
            </Link>
            <a
              className="btn-primary text-sm"
              href={ctaLinks.watchLive}
              rel="noreferrer"
              target="_blank"
            >
              <img alt="" aria-hidden className="h-5 w-5" src={asset('/icons/signup-icon.svg')} />
              Watch Live
            </a>
          </div>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={cn(
              'inline-flex h-12 w-12 items-center justify-center rounded-full border transition lg:hidden',
              isSolid
                ? 'border-slate-200 bg-white text-slate-900'
                : 'border-white/20 bg-white/10 text-white backdrop-blur',
            )}
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            <span className="relative h-4 w-5">
              <span
                className={cn(
                  'absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition',
                  menuOpen && 'top-1.5 rotate-45',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition',
                  menuOpen && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition',
                  menuOpen && 'top-1.5 -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="page-shell space-y-8 py-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    className="rounded-2xl px-4 py-3 text-base font-medium text-slate-900 transition hover:bg-slate-50"
                    href={item.href}
                    key={item.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        'rounded-2xl px-4 py-3 text-base font-medium text-slate-900 transition hover:bg-slate-50',
                        isActive && 'bg-orange-50 text-bridge-orange',
                      )
                    }
                    key={item.label}
                    to={item.href}
                  >
                    {item.label}
                  </NavLink>
                ),
              )}
            </nav>

            <div className="grid gap-3">
              <Link className="btn-secondary justify-center" to={ctaLinks.giving}>
                <img alt="" aria-hidden className="h-5 w-5" src={asset('/icons/login-icon.svg')} />
                Giving
              </Link>
              <a
                className="btn-primary justify-center"
                href={ctaLinks.watchLive}
                rel="noreferrer"
                target="_blank"
              >
                <img alt="" aria-hidden className="h-5 w-5" src={asset('/icons/signup-icon.svg')} />
                Watch Live
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
