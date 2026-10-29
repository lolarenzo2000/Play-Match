import { useState } from 'react'
import { useNavigate } from 'react-router'

const preguntas = [
    {
        id: 1,
        pregunta: '¿Cuánto tiempo tienes para jugar?',
        opciones: ['Menos de 30 Minutos', '30 min - 1 hora', 'Más de 1 hora']
    },
    {
        id: 2,
        pregunta: '¿Qué género prefieres hoy?',
        opciones: ['Acción / Aventura', 'Estrategia / Puzles', 'Indie / Casual']
    },
    {
        id: 3,
        pregunta: '¿En qué plataforma juegas principalmente?',
        opciones: ['PC (Steam)', 'Consola', 'Móvil']
    }
]

function Encuesta() {
    const [pasoActual, setPasoActual] = useState(0)
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('')
    const navigate = useNavigate()

    const preguntaActual = preguntas[pasoActual]
    const porcentajeProgreso = ((pasoActual + 1) / preguntas.length) * 100

    const handleSiguiente = (e) => {
        e.preventDefault()
        if (pasoActual < preguntas.length - 1) {
            setPasoActual(pasoActual + 1)
            setOpcionSeleccionada('')
        } else {
            // Al responder la última pregunta, redirige a Home
            navigate('/home')
        }
    }

    return (
        <div className='relative isolate flex min-h-0 items-center justify-center bg-[url("https://i.pinimg.com/736x/fd/26/d9/fd26d963a0d04d3705138da243dacb9a.jpg")] bg-[length:736px_auto] bg-repeat p-4'>
            {/* Capa con gradiente oscuro como en la imagen */}
            <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-slate-950/65 to-black/85' aria-hidden='true' />

            {/* Tarjeta de encuesta estilo claro */}
            <div className='relative z-10 w-full max-w-md rounded-2xl bg-gray-100 p-8 text-gray-900 shadow-2xl'>
                <span className='text-sm font-medium text-gray-500'>
                    Pregunta {pasoActual + 1}/{preguntas.length}
                </span>

                <h1 className='mb-6 mt-1 text-2xl font-bold leading-tight'>
                    {preguntaActual.pregunta}
                </h1>

                <form onSubmit={handleSiguiente} className='flex flex-col gap-3'>
                    {preguntaActual.opciones.map((opcion, index) => (
                        <label
                            key={index}
                            className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 font-medium transition-colors ${
                                opcionSeleccionada === opcion
                                    ? 'border-slate-700 bg-slate-200 text-slate-950'
                                    : 'border-transparent hover:bg-gray-200/70 text-gray-800'
                            }`}
                        >
                            <input
                                type='radio'
                                name='opcion-encuesta'
                                value={opcion}
                                checked={opcionSeleccionada === opcion}
                                onChange={(e) => setOpcionSeleccionada(e.target.value)}
                                className='h-4 w-4 accent-slate-800'
                                required
                            />
                            {opcion}
                        </label>
                    ))}

                    <div className='mt-4 flex flex-col items-center gap-6'>
                        <button
                            type='submit'
                            className='w-40 rounded-xl bg-slate-700 py-2.5 font-bold text-white shadow-md transition-colors hover:bg-slate-800 active:scale-95 cursor-pointer'
                        >
                            {pasoActual === preguntas.length - 1 ? 'Finalizar' : 'Siguiente'}
                        </button>

                        {/* Barra de progreso */}
                        <div className='h-2 w-full overflow-hidden rounded-full bg-gray-300'>
                            <div
                                className='h-full bg-slate-700 transition-all duration-300'
                                style={{ width: `${porcentajeProgreso}%` }}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Encuesta