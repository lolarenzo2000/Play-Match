import { useNavigate } from 'react-router'

function InicioSesion() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue al enviar el formulario
        navigate('/encuesta'); // Redirige a la encuesta
    };

    return (
<<<<<<< Updated upstream
        <div class='bg-[url("https://i.pinimg.com/736x/fd/26/d9/fd26d963a0d04d3705138da243dacb9a.jpg")] flex justify-center items-center h-screen'>
            <div class='bg-gray-100 p-6 rounded-lg w-96'>
                <h1 class='text-4xl font-bold mb-4'>Inicio de Sesión</h1>
                <form class='flex flex-col justify-center items-center'>
                    <input type='text' placeholder='Usuario/Email' class='w-64 flex-initial rounded-full outline outline-black/50 mb-2 p-2'/>
                    <input type='password' placeholder='Contraseña' class='w-64 flex-initial rounded-full outline outline-black/50 mb-2 p-2'/>
                    <button type='submit' class='flex-initial w-32 rounded-full font-bold text-white bg-sky-800 p-2 hover:bg-sky-700'>Iniciar Sesión</button>
=======
        <div className='relative isolate flex items-center justify-center bg-[url("https://i.pinimg.com/736x/fd/26/d9/fd26d963a0d04d3705138da243dacb9a.jpg")] bg-[length:736px_auto] bg-repeat min-h-[calc(100vh-40px)]'>
            <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-slate-950/65 to-black/85' aria-hidden='true' />
            <div className='relative z-10 w-96 rounded-lg bg-slate-800 p-6 text-slate-100 shadow-xl'>
                <h1 className='mb-4 text-4xl font-bold text-center'>Inicio de Sesión</h1>
                <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
                    <input 
                        type='text' 
                        placeholder='Usuario/Email' 
                        className='mb-2 w-64 flex-initial rounded-full bg-slate-900 p-2 text-slate-100 outline outline-slate-600 placeholder:text-slate-400'
                        required
                    />
                    <input 
                        type='password' 
                        placeholder='Contraseña' 
                        className='mb-2 w-64 flex-initial rounded-full bg-slate-900 p-2 text-slate-100 outline outline-slate-600 placeholder:text-slate-400'
                        required
                    />
                    <button 
                        type='submit' 
                        className='w-32 flex-initial rounded-full bg-sky-800 p-2 font-bold text-white hover:bg-sky-700 cursor-pointer transition-transform active:scale-95 mt-2'
                    >
                        Iniciar Sesión
                    </button>
>>>>>>> Stashed changes
                </form>
            </div>
        </div>
    );
}

export default InicioSesion;