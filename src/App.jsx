import { Routes, Route } from 'react-router-dom'
import Home  from './pages/Home/Home'
import About from './pages/About/About'

export default function App() {
  return (
    <Routes>
      <Route path="/"      element={<Home />}  />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
