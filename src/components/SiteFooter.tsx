import { asset, footerContacts, socialLinks } from '../lib/siteData'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-bridge-dark text-white">
      <div className="absolute inset-0 opacity-10">
        <img
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          src={asset('/gallery/bridgefooter.png')}
        />
      </div>

      <div className="page-shell relative grid gap-12 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div className="space-y-6">
          <img
            alt="Province 103 Youth, The Bridge logo"
            className="h-20 w-auto"
            src="/brand/rccg-logo.png"
          />
          <p className="max-w-md text-lg leading-8 text-white/75">
            Province 103 Youth, The Bridge is a faith-driven community
            connecting the Word to the world through worship, service, and
            discipleship.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div className="space-y-6">
            <h3 className="text-3xl font-medium leading-tight">
              This is not just church.
              <br />
              This is The Bridge.
              <br />
              This is home.
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

          <div className="flex items-center gap-4 md:justify-end">
            {socialLinks.map((item) => (
              <a
                className="rounded-full border border-white/15 bg-white/5 p-3 transition hover:-translate-y-0.5 hover:bg-white/10"
                href={item.href}
                key={item.label}
                rel="noreferrer"
                target="_blank"
              >
                <img alt={item.label} className="h-5 w-5" src={item.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
