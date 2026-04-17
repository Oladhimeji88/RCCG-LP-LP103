import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import { siteContent } from '../content/siteContent'
import { connectOptions, footerContacts, quickLinks } from '../lib/siteData'

type ConnectFormState = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  content: string
  requestType: string
}

const initialState: ConnectFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  content: '',
  requestType: '',
}

export function ConnectPage() {
  const [formState, setFormState] = useState(initialState)
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
    setNotice(siteContent.connect.notice)
    setFormState(initialState)
  }

  return (
    <main className="min-h-screen bg-black pt-28 text-white">
      <section className="page-shell section-space">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">
                {siteContent.connect.eyebrow}
              </p>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">
                {siteContent.connect.title}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-white/70">
                {siteContent.connect.description}
              </p>
            </div>

            <div className="space-y-4 rounded-[3px] border border-white/10 bg-white/5 p-6 backdrop-blur">
              {footerContacts.map((contact) => (
                <div className="flex items-center gap-3 text-white/80" key={contact.label}>
                  <img alt="" aria-hidden className="h-5 w-5" src={contact.icon} />
                  <span>{contact.value}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {quickLinks.map((item) => (
                <a
                  className="rounded-[3px] border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  href={item.href}
                  key={item.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[3px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur sm:p-8">
            {notice ? (
              <div className="mb-6 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-medium text-white">
                {notice}
              </div>
            ) : null}

            <form className="space-y-7" onSubmit={handleSubmit}>
              <div className="border-b border-white/20 pb-4">
                <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-white/45">
                  How do we help you?
                </label>
                <select
                  className="w-full bg-transparent text-lg text-white outline-none"
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      requestType: event.target.value,
                    }))
                  }
                  required
                  value={formState.requestType}
                >
                  <option className="text-slate-900" value="">
                    Select an option
                  </option>
                  {connectOptions.map((option) => (
                    <option className="text-slate-900" key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="border-b border-white/20 pb-3">
                  <span className="block text-sm uppercase tracking-[0.2em] text-white/45">
                    First Name
                  </span>
                  <input
                    className="mt-2 w-full bg-transparent text-lg text-white outline-none"
                    onChange={(event) =>
                      setFormState((current) => ({
                        ...current,
                        firstName: event.target.value,
                      }))
                    }
                    required
                    type="text"
                    value={formState.firstName}
                  />
                </label>

                <label className="border-b border-white/20 pb-3">
                  <span className="block text-sm uppercase tracking-[0.2em] text-white/45">
                    Last Name
                  </span>
                  <input
                    className="mt-2 w-full bg-transparent text-lg text-white outline-none"
                    onChange={(event) =>
                      setFormState((current) => ({
                        ...current,
                        lastName: event.target.value,
                      }))
                    }
                    required
                    type="text"
                    value={formState.lastName}
                  />
                </label>
              </div>

              <label className="block border-b border-white/20 pb-3">
                <span className="block text-sm uppercase tracking-[0.2em] text-white/45">
                  Email
                </span>
                <input
                  className="mt-2 w-full bg-transparent text-lg text-white outline-none"
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  required
                  type="email"
                  value={formState.email}
                />
              </label>

              <label className="block border-b border-white/20 pb-3">
                <span className="block text-sm uppercase tracking-[0.2em] text-white/45">
                  Phone Number
                </span>
                <input
                  className="mt-2 w-full bg-transparent text-lg text-white outline-none"
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      phoneNumber: event.target.value,
                    }))
                  }
                  type="tel"
                  value={formState.phoneNumber}
                />
              </label>

              <label className="block border-b border-white/20 pb-3">
                <span className="block text-sm uppercase tracking-[0.2em] text-white/45">
                  Message
                </span>
                <textarea
                  className="mt-2 min-h-[10rem] w-full resize-none bg-transparent text-lg text-white outline-none"
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      content: event.target.value,
                    }))
                  }
                  required
                  value={formState.content}
                />
              </label>

              <button className="btn-primary w-full justify-center" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
