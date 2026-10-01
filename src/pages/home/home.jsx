const recommendations = [
    {
        title: 'Marvel’s Spider-Man 2',
        href: 'https://store.steampowered.com/app/2651280/',
        image: 'https://cdn.akamai.steamstatic.com/steam/apps/2651280/header.jpg',
    },
    {
        title: 'LEGO Batman',
        href: 'https://store.steampowered.com/app/2215200/',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2215200/a07a9a6c0c9c1225f5b260b4f29fe40e6f099f6b/header.jpg?t=1789746326',
    },
    {
        title: 'Grain Rot',
        href: 'https://store.steampowered.com/app/4450620/',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4450620/697974067797577ee1803c37a44b4217d886502a/header.jpg?t=1786114521',
    },
]

const newGames = [
    {
        title: 'Restory',
        href: 'https://store.steampowered.com/app/3812600/',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3812600/c07daeca18353c666d51462d2e69c30ec68094ad/header_alt_assets_3.jpg?t=1790169325',
    },
    {
        title: 'Machine Party',
        href: 'https://store.steampowered.com/app/4108000/',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4108000/00ae7d0e0fd0ad72635bddb1dd80ee68cc94eed5/header.jpg?t=1786561627',
    },
    {
        title: 'Iron Nest',
        href: 'https://store.steampowered.com/app/2950790/',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2950790/e6c9e990560078611472e5dab98e79a405ed33f4/header.jpg?t=1789499918',
    },
]

function GameCarousel({ title, games, moreHref }) {
    return (
        <section className="px-10 pt-3 max-sm:px-4" aria-label={title}>
            <div className="mb-1 flex items-center justify-between">
                <h2 className="m-0 text-[17px] font-normal">{title}</h2>
                <a className="text-[15px] text-gray-900 underline underline-offset-2" href={moreHref}>
                    ver más
                </a>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {games.map((game) => (
                    <a className="group relative aspect-[2.15/1] w-[310px] shrink-0 overflow-hidden rounded-lg bg-slate-800 text-left no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 max-sm:w-[260px]" href={game.href} key={game.title} rel="noreferrer" target="_blank">
                        <img
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            src={game.image}
                            alt=""
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                        <h3 className="absolute bottom-0 left-0 m-0 p-3 text-sm font-semibold text-white">
                            {game.title}
                        </h3>
                    </a>
                ))}
            </div>
        </section>
    )
}

function Home(){
    return (
        <main className="flex min-h-[calc(100vh-40px)] flex-col bg-white text-gray-950">
            <h1 className="m-0 border-b border-slate-200 px-10 py-1 text-[28px] font-bold leading-10 max-sm:px-4 max-sm:text-[22px]">
                Hola Usuario, hoy te recomendamos:
            </h1>

            <section className="relative flex h-[224px] shrink-0 items-center overflow-hidden bg-[#10130f] max-sm:h-[190px]" aria-label="Juego recomendado: Big Walk">
                <img
                    className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
                    src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1478500/1ecbbe2f694f94fd25767a347b8e0c3076ff78f6/ss_1ecbbe2f694f94fd25767a347b8e0c3076ff78f6.1920x1080.jpg?t=1785911674"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/40" />
                <a href='/juego/big-walk' className="group relative ml-[12%] aspect-[2.1/1] w-[300px] overflow-hidden rounded-[22px] bg-slate-800 shadow-xl max-sm:ml-5 max-sm:w-[min(78vw,300px)]">
                    <img
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1478500/62eeee1507dbac905e128a62f2ce690550238db0/header.jpg?t=1785911674"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                        <p className="m-0 text-xs font-medium uppercase">Recomendado para ti</p>
                        <h2 className="m-0 text-3xl font-extrabold leading-none">Big Walk</h2>
                    </div>
                </a>
            </section>

            <GameCarousel title="Otras recomendaciones" games={recommendations} moreHref="/recomendaciones" />
            <GameCarousel title="Juegos nuevos" games={newGames} moreHref="/juegos-nuevos" />
        </main>
    );
}

export default Home