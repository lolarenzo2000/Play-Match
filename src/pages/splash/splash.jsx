function Splash(){
    return(
        <>
            <section>
                <div className="bg-blue-800 h-16" />
                <div className="p-16 bg-blue-950">
                    <h1 className="text-4xl text-white py-4 font-bold">Encuentra tu proximo juego en menos de 2 minutos</h1>
                    <button href="/" class='bg-blue-800 text-2xl text-white py-3 px-8 hover:bg-blue-700 rounded-full'>Empezar Ahora</button>
                </div>
                <div className="bg-blue-800 h-16" />
            </section>
            <section className="p-16">
                <h1 className="font-bold text-3xl">Como funciona</h1>
                <div className='flex'>
                    <div className="w-64 p-2 m-2 bg-blue-500 text-white rounded-lg">
                        <h1 className="text-2xl font-bold">Paso 1</h1>
                        <p className="text-xl">Crear Cuenta</p>
                    </div>
                    <div className="w-64 p-2 m-2 bg-blue-500 text-white rounded-lg">
                        <h1 className="text-2xl font-bold">Paso 2</h1>
                        <p className="text-xl">Completar encuesta</p>
                    </div>
                    <div className="w-64 p-2 m-2 bg-blue-500 text-white rounded-lg">
                        <h1 className="text-2xl font-bold">Paso 3</h1>
                        <p className="text-xl">Disfrutar</p>
                    </div>

                </div>

            </section>
            
            
        </>
    )
}

export default Splash