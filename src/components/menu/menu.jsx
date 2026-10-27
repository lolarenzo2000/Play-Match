import { useState } from 'react'
import { Link } from 'react-router'

function Menu() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <header className='relative z-50 bg-blue-900 text-gray-100'>
            <div className='flex items-center justify-between p-2 md:text-base'>
                <nav className='hidden items-center gap-1 md:flex' aria-label='Navegación principal'>
                    <Link to="/home" className='bg-blue-800 p-2 hover:bg-blue-700'>Home</Link>
                    <Link to="/aleatorio" className='bg-blue-800 p-2 hover:bg-blue-700'>Aleatorio</Link>
                    <Link to="/perfil" className='bg-blue-800 p-2 hover:bg-blue-700'>Perfil</Link>
                </nav>
                <nav className='hidden items-center gap-2 md:flex' aria-label='Acceso de usuario'>
                    <Link to="/inicio-sesion" className='rounded-full bg-blue-100 px-4 p-2 font-bold text-black hover:bg-blue-200'>Inicio Sesión</Link>
                    <Link to="/registro" className='rounded-full bg-blue-800 px-4 p-2 hover:bg-blue-700'>Registro</Link>
                </nav>
                <button
                    type='button'
                    className='flex size-11 flex-col items-center justify-center gap-1.5 rounded p-2 hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white md:hidden'
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                    aria-controls='mobile-menu'
                    onClick={() => setMenuOpen((isOpen) => !isOpen)}
                >
                    <span className='h-0.5 w-6 bg-white' />
                    <span className='h-0.5 w-6 bg-white' />
                    <span className='h-0.5 w-6 bg-white' />
                </button>
            </div>

            {menuOpen && (
                <nav id='mobile-menu' className='absolute left-0 right-0 top-full flex flex-col gap-1 bg-blue-900 p-3 shadow-lg md:hidden' aria-label='Menú móvil'>
                    <Link to="/home" onClick={closeMenu} className='rounded px-3 py-2 hover:bg-blue-800'>Home</Link>
                    <Link to="/aleatorio" onClick={closeMenu} className='rounded px-3 py-2 hover:bg-blue-800'>Aleatorio</Link>
                    <Link to="/perfil" onClick={closeMenu} className='rounded px-3 py-2 hover:bg-blue-800'>Perfil</Link>
                    <div className='my-1 border-t border-blue-700' />
                    <Link to="/inicio-sesion" onClick={closeMenu} className='rounded px-3 py-2 font-bold text-white hover:bg-blue-800'>Inicio Sesión</Link>
                    <Link to="/registro" onClick={closeMenu} className='rounded px-3 py-2 hover:bg-blue-800'>Registro</Link>
                </nav>
            )}
        </header>
    )
}

export default Menu