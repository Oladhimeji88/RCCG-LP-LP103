import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
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

function AppShell() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/lp103-admin')

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
        <Route path="/lp103-admin" element={<AdminPage />} />
        <Route path="/department" element={<DepartmentsPage />} />
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
