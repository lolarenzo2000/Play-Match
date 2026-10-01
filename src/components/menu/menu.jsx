function Menu(){
    return(
        <>
        <div class='bg-blue-900 text-gray-100 p-2 flex justify-between'>
            <nav>
                <a href="/" class='bg-blue-800 p-2  hover:bg-blue-700'>Home</a>&nbsp;
                <a href="/Aleatorio" class='bg-blue-800 p-2 hover:bg-blue-700'>Aleatorio</a>&nbsp;
                <a href="/perfil" class='bg-blue-800 p-2 hover:bg-blue-700'>Perfil</a>
            </nav>
            <nav>
                <a href="/inicio-sesion" class='bg-blue-800 p-2 hover:bg-blue-700'>Inicio Sesión</a>&nbsp;
                <a href="/registro" class='bg-blue-800 p-2 hover:bg-blue-700'>Registro</a>
            </nav>
        </div>
        
        </>
    )
}

export default Menu