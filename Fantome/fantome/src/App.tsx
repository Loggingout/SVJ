import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AboutUsPage from './pages/AboutUsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      {/* Add more routes here as you build more pages */}
    </Routes>
  )
}

export default App