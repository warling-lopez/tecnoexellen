import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './routes/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        
        {/* Ruta para manejar páginas no encontradas */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  </StrictMode>
)