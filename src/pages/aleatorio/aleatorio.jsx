import { useState } from 'react'
import { useNavigate } from 'react-router'
import './aleatorio.css'

// Lista con los 4 juegos para el modo aleatorio
const listaJuegos = [
    {
        title: 'Big Walk',
        path: '/juego/big-walk',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1478500/62eeee1507dbac905e128a62f2ce690550238db0/header.jpg?t=1785911674'
    },
    {
        title: 'LEGO Batman',
        path: 'https://store.steampowered.com/app/2215200/',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215200/a07a9a6c0c9c1225f5b260b4f29fe40e6f099f6b/header.jpg?t=1789746326'
    },
    {
        title: 'Marvel’s Spider-Man 2',
        path: 'https://store.steampowered.com/app/2651280/',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/2651280/header.jpg'
    },
    {
        title: 'Restory',
        path: 'https://store.steampowered.com/app/3812600/',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3812600/c07daeca18353c666d51462d2e69c30ec68094ad/header_alt_assets_3.jpg?t=1790169325'
    }
]

function Aleatorio() {
    const [juegoSeleccionado, setJuegoSeleccionado] = useState(null)
    const [cargando, setCargando] = useState(false)
    const navigate = useNavigate()

    // Función para elegir un juego al azar al hacer clic en el botón rojo
    const elegirAleatorio = () => {
        const indiceAleatorio = Math.floor(Math.random() * listaJuegos.length)
        setJuegoSeleccionado(listaJuegos[indiceAleatorio])
    }

    // Maneja la transición visual y la redirección (interna o externa a Steam)
    const handleIrAJuego = (path) => {
        setCargando(true)
        setTimeout(() => {
            if (path.startsWith('http')) {
                window.open(path, '_blank')
                setCargando(false)
            } else {
                navigate(path)
            }
        }, 500)
    }

    return (
        <>
            {/* Capa de transición clara al salir */}
            {cargando && (
                <div className="fixed inset-0 bg-white/70 z-50 transition-opacity duration-300 pointer-events-none" />
            )}

            <div className="flex flex-col min-h-[calc(100vh-40px)] items-center justify-center gap-6 p-6">
                
                {/* Espacio superior para mostrar el juego elegido (o un cuadro sutil si aún no se elige ninguno) */}
                <div className="h-[180px] flex items-center justify-center w-full">
                    {juegoSeleccionado ? (
                        <button
                            onClick={() => handleIrAJuego(juegoSeleccionado.path)}
                            className="group relative aspect-[2.1/1] w-[300px] overflow-hidden rounded-[22px] bg-slate-800 text-left shadow-xl transition-transform active:scale-95 cursor-pointer"
                        >
                            <img
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                src={juegoSeleccionado.image}
                                alt={juegoSeleccionado.title}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <p className="m-0 text-xs font-medium uppercase">{juegoSeleccionado.tag}</p>
                                <h2 className="m-0 text-3xl font-extrabold leading-none">{juegoSeleccionado.title}</h2>
                            </div>
                        </button>
                    ) : (
                        <div className="w-[300px] aspect-[2.1/1] rounded-[22px] border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50/50">
                            <span className="text-gray-400 text-xs font-medium">¿Cuál te tocará?</span>
                        </div>
                    )}
                </div>

                {/* Descripción fija entre el juego y el botón */}
                <p className="text-gray-500 font-medium text-sm text-center">
                    Presiona el botón de abajo para descubrir un juego aleatorio
                </p>

                {/* Botón rojo central */}
                <div className="flex items-center justify-center">
                    <button 
                        onClick={elegirAleatorio}
                        className="rounded-full px-8 py-4 bg-red-600 text-white font-bold text-lg outline outline-5 outline-red-500 hover:bg-red-700 focus:bg-red-700 shadow-lg cursor-pointer transition-transform active:scale-95"
                    >
                        Juego Aleatorio
                    </button>    
                </div>

            </div>          
        </>
    )
}

export default Aleatorio