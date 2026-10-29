import { useState } from 'react'
import './aleatorio.css'
import GameCarousel from '../../components/gameCarousel.jsx'

const listaJuegosBase = [
    {
        title: 'Big Walk',
        href: '/juego/big-walk',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1478500/62eeee1507dbac905e128a62f2ce690550238db0/header.jpg?t=1785911674'
    },
    {
        title: 'LEGO Batman',
        href: 'https://store.steampowered.com/app/2215200/',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215200/a07a9a6c0c9c1225f5b260b4f29fe40e6f099f6b/header.jpg?t=1789746326'
    },
    {
        title: 'Marvel’s Spider-Man 2',
        href: 'https://store.steampowered.com/app/2651280/',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/2651280/header.jpg'
    },
    {
        title: 'Restory',
        href: 'https://store.steampowered.com/app/3812600/',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3812600/c07daeca18353c666d51462d2e69c30ec68094ad/header_alt_assets_3.jpg?t=1790169325'
    }
]

function Aleatorio() {
    const [cargando, setCargando] = useState(false)
    const [juegosActuales, setJuegosActuales] = useState([]) // Inicia vacío para que no salgan al cargar

    // Al hacer clic, hace el fade y muestra los juegos aleatorios
    const handleBuscarAleatorio = () => {
        setCargando(true)

        setTimeout(() => {
            const juegosMezclados = [...listaJuegosBase].sort(() => Math.random() - 0.5)
            setJuegosActuales(juegosMezclados)
            setCargando(false)
        }, 300)
    }

    return (
        <div className="relative isolate flex min-h-0 flex-col bg-[url('https://i.pinimg.com/736x/fd/26/d9/fd26d963a0d04d3705138da243dacb9a.jpg')] bg-[length:736px_auto] bg-repeat p-6 md:p-10 justify-center overflow-hidden">
            
            {/* Fondo y capa de fundido */}
            <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-slate-950/65 to-black/85 -z-10' aria-hidden='true' />
            <div className={`absolute inset-0 bg-slate-950 z-30 transition-opacity duration-300 pointer-events-none ${cargando ? 'opacity-100' : 'opacity-0'}`} />

            {/* Encabezado, frase y botón */}
            <div className="mx-auto w-full max-w-5xl rounded-2xl bg-blue-900 p-4 md:p-6">
                <div className="relative z-10 mb-8 max-w-5xl mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-white">
                            Hola Usuario, hoy te recomendamos:
                        </h1>
                        <p className="text-gray-300 text-lg italic">
                            "Según nuestras investigaciones, esto te puede gustar..."
                        </p>
                    </div>
                    <button
                        onClick={handleBuscarAleatorio}
                        className="self-start md:self-auto rounded-full px-8 py-4 bg-red-600 text-white font-bold text-base outline outline-4 outline-red-500 hover:bg-red-700 shadow-lg cursor-pointer transition-transform active:scale-95"
                    >
                        Buscar juegos aleatorios
                    </button>
                </div>

                {/* Área del carrusel o estado inicial */}
                <div className="relative z-10 w-full max-w-5xl mx-auto text-slate-100">
                    {juegosActuales.length > 0 ? (
                        <GameCarousel title="Recomendaciones aleatorias" games={juegosActuales} />
                    ) : (
                        <div className="w-full h-[180px] rounded-[22px] border-2 border-dashed border-gray-500/50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
                            <span className="text-gray-400 text-sm font-medium">Presiona el botón "Buscar juegos aleatorios" para revelar las recomendaciones...</span>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Aleatorio