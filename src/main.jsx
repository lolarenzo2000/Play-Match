import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from "react-router";
import './index.css'
import Menu from './components/menu/menu.jsx'
import Home from './pages/home/home.jsx'
import Aleatorio from './pages/aleatorio/aleatorio.jsx'
import Registro from './pages/registro/registro.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/aleatorio" element={<Aleatorio />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
)