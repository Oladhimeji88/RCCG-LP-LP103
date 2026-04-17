import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { ScrollToTop } from './components/ScrollToTop'
import { ContentVersionProvider } from './lib/contentStore'
import { AboutPage } from './pages/AboutPage'
import { AdminPage } from './pages/AdminPage'
import { BranchesPage } from './pages/BranchesPage'
import { ConnectPage } from './pages/ConnectPage'
import { CounselingPage } from './pages/CounselingPage'
import { DepartmentsPage } from './pages/DepartmentsPage'
import { GivingPage } from './pages/GivingPage'
import { HomePage } from './pages/HomePage'
import { JobsPage } from './pages/JobsPage'

const normalizePathname = (pathname: string) => {
  let decodedPathname = pathname

  try {
    decodedPathname = decodeURIComponent(pathname)
  } catch {
    decodedPathname = pathname
  }

  const segments = decodedPathname
    .split('/')
    .map((segment) => segment.trim())
    .filter(Boolean)

  return segments.length ? `/${segments.join('/')}` : '/'
}

function RouteFallback() {
  const location = useLocation()
  const normalizedPathname = normalizePathname(location.pathname)

  if (normalizedPathname !== location.pathname) {
    return (
      <Navigate
        replace
        to={`${normalizedPathname}${location.search}${location.hash}`}
      />
    )
  }

  return (
    <main className="bg-white pt-28">
      <section className="section-space">
        <div className="page-shell space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-bridge-orange">
            Page Not Found
          </p>
          <h1 className="text-4xl font-semibold text-slate-900 sm:text-5xl">
            That page could not be found.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            If you are trying to open the hidden editor, use `/lp103-admin`.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              className="btn-primary justify-center"
              to="/"
            >
              Go Home
            </Link>
            <Link
              className="btn-secondary justify-center"
              to="/lp103-admin"
            >
              Open Admin
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function AppShell() {
  const location = useLocation()
  const normalizedPathname = normalizePathname(location.pathname)
  const isAdminRoute = normalizedPathname.startsWith('/lp103-admin')

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      {!isAdminRoute ? <SiteHeader /> : null}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/counseling" element={<CounselingPage />} />
        <Route path="/counselling" element={<CounselingPage />} />
        <Route path="/giving" element={<GivingPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/lp103-admin/*" element={<AdminPage />} />
        <Route path="/department" element={<DepartmentsPage />} />
        <Route path="*" element={<RouteFallback />} />
      </Routes>
      {!isAdminRoute ? <SiteFooter /> : null}
    </div>
  )
}

function App() {
  return (
    <ContentVersionProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppShell />
      </BrowserRouter>
    </ContentVersionProvider>
  )
}

export default App
