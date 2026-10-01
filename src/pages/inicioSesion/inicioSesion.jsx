function InicioSesion() {
    return (
        <div class='mask-b-from-20% mask-b-to-80% bg-[url("https://i.pinimg.com/736x/fd/26/d9/fd26d963a0d04d3705138da243dacb9a.jpg")] flex justify-center items-center h-screen'>
            <div class='bg-gray-100 p-6 rounded-lg w-96'>
                <h1 class='text-2xl font-bold mb-4'>Inicio de Sesión</h1>
                <form class='flex flex-col justify-center items-center'>
                    <input type='text' placeholder='Usuario/Email' class='w-64 flex-initial rounded-full outline outline-black/50 mb-2 p-2'/>
                    <input type='password' placeholder='Contraseña' class='w-64 flex-initial rounded-full outline outline-black/50 mb-2 p-2'/>
                    <button type='submit' class='flex-initial w-32 rounded-full font-bold text-white bg-sky-800 p-2 hover:bg-sky-700'>Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
}

export default InicioSesion;