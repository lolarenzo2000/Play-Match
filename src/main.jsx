import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route, Navigate } from "react-router";
import './index.css'
import Menu from './components/menu/menu.jsx'
import Splash from './pages/splash/splash.jsx'
import Home from './pages/home/home.jsx'
import Aleatorio from './pages/aleatorio/aleatorio.jsx'
import Registro from './pages/registro/registro.jsx'
import InicioSesion from './pages/inicioSesion/inicioSesion.jsx'
import Perfil from './pages/perfil/perfil.jsx'
import BigWalk from './pages/juego/big-walk/big-walk.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <div className="flex min-h-screen min-w-0 flex-col">
      <Menu />
      <div className="grid min-w-0 flex-1 grid-rows-[1fr]">
        <Routes>
          {/* El Splash ahora es la primera pantalla (raíz /) */}
          <Route path="/" element={<Splash />} />

          {/* El Home se mueve a /home */}
          <Route path="/home" element={<Home />} />

          <Route path="/inicio-sesion" element={<InicioSesion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/aleatorio" element={<Aleatorio />} />
          <Route path="/juego/big-walk" element={<BigWalk />} />

          {/* Cualquier ruta desconocida vuelve al Home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
      <footer className='flex justify-center bg-blue-900 p-2 text-gray-100'>
        <p>&copy; 2026 Play-Match. All rights reserved.</p>
      </footer>
    </div>
  </HashRouter>,
)