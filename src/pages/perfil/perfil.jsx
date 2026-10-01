function Perfil(){
    return(
        <main className="flex min-h-[calc(100vh-40px)] flex-col overflow-hidden bg-white text-gray-900">
            <div className="relative h-[138px] shrink-0 overflow-hidden bg-[#07121b]" role="img" aria-label="La Tierra vista desde el espacio">
                <img
                    className="absolute inset-0 h-full w-full object-cover object-[center_48%]"
                    src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=85"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </div>

            <section className="relative flex min-h-[86px] shrink-0 items-center bg-sky-800 py-[10px] pl-[160px] pr-[30px] text-slate-50 max-sm:pr-3 max-sm:pl-[116px]" aria-labelledby="profile-name">
                <div className="absolute -top-6 left-[18px] h-[118px] w-[118px] rounded-full bg-sky-800 p-[7px] max-sm:-top-[18px] max-sm:left-3 max-sm:h-[90px] max-sm:w-[90px] max-sm:p-[5px]">
                    <img
                        className="block h-full w-full rounded-full object-cover"
                        src="https://i.pinimg.com/736x/5a/3f/84/5a3f8406f8c96c6c402d89851376a23b.jpg"
                        alt="Avatar de Usuario"
                    />
                </div>

                <div className="min-w-0">
                    <h1 className="mb-1 m-0 text-base font-bold leading-tight max-sm:text-[15px]" id="profile-name">Usuario</h1>
                    <p className="m-0 text-[9px] leading-[1.5] text-slate-100 max-sm:max-w-[210px] max-sm:text-[8px]">Rol estratégico · cooperativo · sesiones largas · PC</p>
                    <p className="mt-3 m-0 text-[7px] leading-[1.5] text-slate-300 max-sm:mt-2">Creado: 4/08/2026</p>
                </div>

                <div className="ml-auto flex gap-2 pl-4 max-sm:gap-0 max-sm:pl-1">
                    <button className="grid h-7 w-7 place-items-center rounded text-[17px] text-slate-50 hover:bg-white/15 max-sm:w-6" type="button" aria-label="Editar perfil" title="Editar perfil">✎</button>
                    <button className="grid h-7 w-7 place-items-center rounded text-[17px] text-slate-50 hover:bg-white/15 max-sm:w-6" type="button" aria-label="Compartir perfil" title="Compartir perfil">↗</button>
                </div>
            </section>

            <section className="px-8 pb-6 pt-[30px] max-sm:px-4 max-sm:pb-5 max-sm:pt-6" aria-labelledby="favorites-title">
                <div className="mb-1 flex items-center justify-between">
                    <h2 className="m-0 font-xl font-bold" id="favorites-title">Favoritos <span className="ml-[3px] text-xs" aria-hidden="true">★</span></h2>
                    <a className="text-xs text-gray-900 underline underline-offset-2" href="/perfil/favoritos">Ver todos</a>
                </div>
                <div>
                    <p>Coming soon...</p>
                </div>
            </section>
        </main>
    )
}

export default Perfil