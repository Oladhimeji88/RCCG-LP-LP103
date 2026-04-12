import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { ScrollToTop } from './components/ScrollToTop'
import { AboutPage } from './pages/AboutPage'
import { BranchesPage } from './pages/BranchesPage'
import { ConnectPage } from './pages/ConnectPage'
import { DepartmentsPage } from './pages/DepartmentsPage'
import { GivingPage } from './pages/GivingPage'
import { HomePage } from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-50 text-slate-900">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/branches" element={<BranchesPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/giving" element={<GivingPage />} />
          <Route path="/department" element={<DepartmentsPage />} />
        </Routes>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
