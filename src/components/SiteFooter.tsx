import { siteContent } from '../content/siteContent'
import { footerContacts, quickLinks } from '../lib/siteData'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-bridge-dark text-white">
      <div className="absolute inset-0 opacity-10">
        <img
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          src={siteContent.footer.backgroundImage}
        />
      </div>

      <div className="page-shell relative grid gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div className="space-y-6">
          <img
            alt={`${siteContent.brand.churchName} logo`}
            className="h-20 w-auto"
            src="/brand/rccg-logo.png"
          />
          <p className="max-w-md text-lg leading-8 text-white/75">
            {siteContent.brand.footerDescription}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-6">
            <h3 className="text-3xl font-medium leading-tight">
              {siteContent.brand.footerTaglineLines.map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </h3>

            <div className="space-y-4 text-white/80">
              {footerContacts.map((contact) => (
                <div className="flex items-center gap-3" key={contact.label}>
                  <img alt="" aria-hidden className="h-5 w-5" src={contact.icon} />
                  <span>{contact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 md:justify-items-end">
            {quickLinks.map((item) => (
              <a
                className="inline-flex min-w-[12rem] items-center justify-center rounded-[3px] border border-white/15 bg-white/5 px-4 py-3 text-center text-sm transition hover:-translate-y-0.5 hover:bg-white/10"
                href={item.href}
                key={item.label}
                rel="noreferrer"
                target="_blank"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
