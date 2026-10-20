function Menu(){
    return(
        <>
        <div class='bg-blue-900 text-gray-100 p-2 flex justify-between text-2xl'>
            <nav>
                <a href="/" class='bg-blue-800 p-2 hover:bg-blue-700'>Home</a>&nbsp;
                <a href="/Play-Match/Aleatorio" class='bg-blue-800 p-2 hover:bg-blue-700'>Aleatorio</a>&nbsp;
                <a href="/Play-Match/perfil" class='bg-blue-800 p-2 hover:bg-blue-700'>Perfil</a>
            </nav>
            <nav class='py-2'>
                <a href="/Play-Match/inicio-sesion" class='rounded-full bg-blue-100 text-black font-bold px-4 p-2 hover:bg-blue-700'>Inicio Sesión</a>&nbsp;
                <a href="/Play-Match/registro" class='rounded-full bg-blue-800 px-4 p-2 hover:bg-blue-700'>Registro</a>
            </nav>
        </div>
        
        </>
    )
}

export default Menu