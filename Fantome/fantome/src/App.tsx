import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutUsPage from './pages/AboutUsPage'
import ServicePage from './pages/ServicesPage'
import RequestQuotePage from './pages/RequestQuotePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/request-quote" element={<RequestQuotePage />} />
      {/* Add more routes here as you build more pages */}
    </Routes>
  )
}

export default App