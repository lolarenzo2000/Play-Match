function InicioSesion() {
    return (
        <div className='relative isolate flex items-center justify-center bg-[url("https://i.pinimg.com/736x/fd/26/d9/fd26d963a0d04d3705138da243dacb9a.jpg")] bg-[length:736px_auto] bg-repeat'>
            <div className='absolute inset-0 bg-gradient-to-br from-black/80 via-slate-950/65 to-black/85' aria-hidden='true' />
            <div className='relative z-10 w-96 rounded-lg bg-slate-800 p-6 text-slate-100 shadow-xl'>
                <h1 className='mb-4 text-4xl font-bold'>Inicio de Sesión</h1>
                <form className='flex flex-col items-center justify-center'>
                    <input type='text' placeholder='Usuario/Email' className='mb-2 w-64 flex-initial rounded-full bg-slate-900 p-2 text-slate-100 outline outline-slate-600 placeholder:text-slate-400'/>
                    <input type='password' placeholder='Contraseña' className='mb-2 w-64 flex-initial rounded-full bg-slate-900 p-2 text-slate-100 outline outline-slate-600 placeholder:text-slate-400'/>
                    <button type='submit' className='w-32 flex-initial rounded-full bg-sky-800 p-2 font-bold text-white hover:bg-sky-700'>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
}

export default InicioSesion;