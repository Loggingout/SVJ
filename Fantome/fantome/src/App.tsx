import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutUsPage from './pages/AboutUsPage'
import ServicePage from './pages/ServicesPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/services" element={<ServicePage />} />
      {/* Add more routes here as you build more pages */}
    </Routes>
  )
}

export default App