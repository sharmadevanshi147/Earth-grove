import { Routes, Route } from 'react-router-dom'
import Home            from './pages/Home/Home'
import About           from './pages/About/About'
import Services        from './pages/Services/Services'
import ExpertiseDetail from './pages/ExpertiseDetail/ExpertiseDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/"                 element={<Home />}            />
      <Route path="/about"            element={<About />}           />
      <Route path="/services"         element={<Services />}        />
      <Route path="/services/:slug"   element={<ExpertiseDetail />} />
    </Routes>
  )
}
