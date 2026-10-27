import { Link } from 'react-router'

function Menu() {
    return (
        <>
            <div className='bg-blue-900 text-gray-100 p-2 flex justify-between text-2xl'>
                <nav>
                    <Link to="/home" className='bg-blue-800 p-2 hover:bg-blue-700'>Home</Link>&nbsp;
                    <Link to="/aleatorio" className='bg-blue-800 p-2 hover:bg-blue-700'>Aleatorio</Link>&nbsp;
                    <Link to="/perfil" className='bg-blue-800 p-2 hover:bg-blue-700'>Perfil</Link>
                </nav>
                <nav className='py-2'>
                    <Link to="/inicio-sesion" className='rounded-full bg-blue-100 text-black font-bold px-4 p-2 hover:bg-blue-700'>Inicio Sesión</Link>&nbsp;
                    <Link to="/registro" className='rounded-full bg-blue-800 px-4 p-2 hover:bg-blue-700'>Registro</Link>
                </nav>
            </div>
        </>
    )
}

export default Menu