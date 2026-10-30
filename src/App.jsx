import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { HowItWorks, Features, SkillUp, Audience, Plans, Faq, PoliciesSection, Footer } from './components/Sections'
import PolicyPage from './pages/PolicyPage'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // wait a frame so the target section has rendered after a route change
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView())
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Features />
      <SkillUp />
      <Audience />
      <Plans />
      <Faq />
      <PoliciesSection />
      {/* TODO: re-enable <Download /> once the app is live on Google Play */}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy_policy" element={<PolicyPage slug="privacy_policy" />} />
          <Route path="/terms_conditions" element={<PolicyPage slug="terms_conditions" />} />
          <Route path="/data_deletion" element={<PolicyPage slug="data_deletion" />} />
          <Route path="*" element={<PolicyPage slug="missing" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
