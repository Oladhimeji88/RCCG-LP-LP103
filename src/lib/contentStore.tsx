import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { jobsContent, type JobsContent } from '../content/jobsContent'
import { siteContent, type SiteContent } from '../content/siteContent'

type AdminSession = {
  email: string
  signedInAt: string
} | null

type StoreActionResult = {
  ok: boolean
  error?: string
}

const SITE_CONTENT_KEY = 'lp103-site-content'
const JOBS_CONTENT_KEY = 'lp103-jobs-content'
const ADMIN_SESSION_KEY = 'lp103-admin-session'

const SITE_CONTENT_EVENT = 'lp103:site-content-updated'
const JOBS_CONTENT_EVENT = 'lp103:jobs-content-updated'
const ADMIN_SESSION_EVENT = 'lp103:admin-session-updated'

export const ADMIN_EMAIL = 'rccglp103yaya@gmail.com'
const ADMIN_PASSWORD = 'jesusislove4'

const ContentVersionContext = createContext(0)

const cloneValue = <Value,>(value: Value): Value => {
  if (value === null) {
    return value
  }

  return JSON.parse(JSON.stringify(value)) as Value
}

const readStoredValue = <Value,>(key: string, fallback: Value): Value => {
  if (typeof window === 'undefined') {
    return cloneValue(fallback)
  }

  try {
    const rawValue = window.localStorage.getItem(key)
    return rawValue ? (JSON.parse(rawValue) as Value) : cloneValue(fallback)
  } catch {
    return cloneValue(fallback)
  }
}

const dispatchStoreEvent = (eventName: string) => {
  if (typeof window === 'undefined') {
    return
  }

  window.dispatchEvent(new Event(eventName))
}

const saveStoredValue = <Value,>(
  key: string,
  value: Value,
  eventName: string,
): StoreActionResult => {
  if (typeof window === 'undefined') {
    return {
      ok: false,
      error: 'This action is only available in the browser.',
    }
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value))
    dispatchStoreEvent(eventName)

    return { ok: true }
  } catch {
    return {
      ok: false,
      error:
        'Unable to save this update. Browser storage may be full, so try a smaller image file and save again.',
    }
  }
}

const clearStoredValue = (key: string, eventName: string) => {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.removeItem(key)
  dispatchStoreEvent(eventName)
}

const subscribeToStore = (callback: () => void) => {
  if (typeof window === 'undefined') {
    return () => undefined
  }

  const handleChange = (event: Event) => {
    if (event.type === 'storage') {
      const storageEvent = event as StorageEvent
      const watchedKeys = [SITE_CONTENT_KEY, JOBS_CONTENT_KEY, ADMIN_SESSION_KEY]

      if (storageEvent.key && !watchedKeys.includes(storageEvent.key)) {
        return
      }
    }

    callback()
  }

  window.addEventListener('storage', handleChange)
  window.addEventListener(SITE_CONTENT_EVENT, handleChange)
  window.addEventListener(JOBS_CONTENT_EVENT, handleChange)
  window.addEventListener(ADMIN_SESSION_EVENT, handleChange)

  return () => {
    window.removeEventListener('storage', handleChange)
    window.removeEventListener(SITE_CONTENT_EVENT, handleChange)
    window.removeEventListener(JOBS_CONTENT_EVENT, handleChange)
    window.removeEventListener(ADMIN_SESSION_EVENT, handleChange)
  }
}

export function ContentVersionProvider({ children }: { children: ReactNode }) {
  const [version, setVersion] = useState(0)

  useEffect(() => subscribeToStore(() => setVersion((current) => current + 1)), [])

  return (
    <ContentVersionContext.Provider value={version}>
      {children}
    </ContentVersionContext.Provider>
  )
}

export const getManagedSiteContent = () =>
  readStoredValue<SiteContent>(SITE_CONTENT_KEY, siteContent)

export const getManagedJobsContent = () =>
  readStoredValue<JobsContent>(JOBS_CONTENT_KEY, jobsContent)

const getAdminSession = () =>
  readStoredValue<AdminSession>(ADMIN_SESSION_KEY, null)

export const saveManagedSiteContent = (value: SiteContent) =>
  saveStoredValue(SITE_CONTENT_KEY, value, SITE_CONTENT_EVENT)

export const saveManagedJobsContent = (value: JobsContent) =>
  saveStoredValue(JOBS_CONTENT_KEY, value, JOBS_CONTENT_EVENT)

export const resetManagedSiteContent = () =>
  clearStoredValue(SITE_CONTENT_KEY, SITE_CONTENT_EVENT)

export const resetManagedJobsContent = () =>
  clearStoredValue(JOBS_CONTENT_KEY, JOBS_CONTENT_EVENT)

export const loginAdmin = (email: string, password: string) => {
  const normalizedEmail = email.trim().toLowerCase()

  if (normalizedEmail !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return false
  }

  const result = saveStoredValue(
    ADMIN_SESSION_KEY,
    {
      email: normalizedEmail,
      signedInAt: new Date().toISOString(),
    },
    ADMIN_SESSION_EVENT,
  )

  return result.ok
}

export const logoutAdmin = () =>
  clearStoredValue(ADMIN_SESSION_KEY, ADMIN_SESSION_EVENT)

export const useManagedSiteContent = () => {
  useContext(ContentVersionContext)
  return getManagedSiteContent()
}

export const useManagedJobsContent = () => {
  useContext(ContentVersionContext)
  return getManagedJobsContent()
}

export const useAdminSession = () => {
  useContext(ContentVersionContext)
  return getAdminSession()
}
