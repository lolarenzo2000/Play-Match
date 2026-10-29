import { Link } from 'react-router'
import GameCarousel from '../../components/gameCarousel.jsx'

const favourites = [
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
    {
        title:'Null',
        href: '' ,
        image: '',
    },
    {
        title:'Null',
        href: '' ,
        image: '',
    },
    {
        title:'Null',
        href: '' ,
        image: '',
    },
    {
        title:'Null',
        href: '' ,
        image: '',
    }
]

function Perfil(){
    return(
        <div className='flex w-full min-w-0 flex-col overflow-x-clip'>
            <div className='relative h-[200px] w-full shrink-0 overflow-hidden bg-[#07121b]' role="img" aria-label="La Tierra vista desde el espacio">
                <img
                    className='absolute inset-0 h-full w-full object-cover object-[center_48%]'
                    src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1800&q=85"
                    alt=""
                />
                <div className='absolute inset-0 bg-gradient-to-r from-black/30 to-transparent' />
            </div>

            <section className='flex h-auto min-w-0 flex-col gap-4 bg-sky-800 p-4 text-white sm:flex-row sm:items-center sm:justify-between'>
                <div className='flex min-w-0 items-center gap-4'>
                    <div className='shrink-0 rounded-full outline outline-8 outline-sky-800'>
                        <img
                            className='block h-[138px] w-[138px] overflow-hidden rounded-full object-cover'
                            src="https://i.pinimg.com/736x/5a/3f/84/5a3f8406f8c96c6c402d89851376a23b.jpg"
                            alt="Avatar de Usuario"
                        />                
                    </div>
                    <div className='min-w-0'>
                        <h1 className='text-2xl font-bold'>Usuario</h1>
                        <p>Rol estratégico · cooperativo · sesiones largas · PC</p>
                        <p>Creado: 4/08/2026</p>
                    </div>
                </div>
                
                <div className='flex shrink-0 gap-2 self-end sm:self-auto'>
                    <button className='text-2xl' type='button' aria-label='Editar perfil'>✎</button>
                    <button className='text-2xl' type='button' aria-label='Compartir perfil'>↗</button>
                </div>
            </section>

            <section className='w-full min-w-0 px-2 sm:px-6'>
                <GameCarousel title="Favoritos ★" games={favourites} moreHref="/perfil/favoritos" />
            </section>
        </div>
    )
}

export default Perfil