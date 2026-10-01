function Perfil(){
    return(
        <div class=''>
            <div class='relative h-[200px] shrink-0 overflow-hidden bg-[#07121b]' role="img" aria-label="La Tierra vista desde el espacio">
                <img
                    class='absolute inset-0 h-full w-full object-cover object-[center_48%]'
                    src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=85"
                    alt=""
                />
                <div class='absolute inset-0 bg-gradient-to-r from-black/30 to-transparent' />
            </div>

            <section class='bg-sky-800 text-white flex justify-between'>
                <div class='flex items-center gap-4'>
                    <div class='rounded-full outline outline-8 outline-sky-800 center flex-initial'>                    
                        <img
                            class='block h-[138px] w-[138px] overflow-hidden rounded-full object-cover'
                            src="https://i.pinimg.com/736x/5a/3f/84/5a3f8406f8c96c6c402d89851376a23b.jpg"
                            alt="Avatar de Usuario"
                        />                
                    </div>
                    <div>
                        <h1 class='font-bold text-2xl'>Usuario</h1>
                        <p>Rol estratégico · cooperativo · sesiones largas · PC</p>
                        <p>Creado: 4/08/2026</p>
                    </div>
                </div>
                
                

                <div class=''>
                    <button >✎</button>
                    <button >↗</button>
                </div>
            </section>

            <section>
                <div class='font-xl flex items-center justify-between'>
                    <h2 class='font-bold'>Favoritos ★</h2>
                    <a class='underline underline-offset-2' href="/perfil/favoritos">Ver todos</a>
                </div>
                <div>
                    <p>Coming soon...</p>
                </div>
            </section>
        </div>
    )
}

export default Perfil