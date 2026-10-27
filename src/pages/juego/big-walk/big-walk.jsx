import GameCarousel from '../../../components/gameCarousel.jsx'
const similars = [
    {
        title: 'Machine Party',
        href: 'https://store.steampowered.com/app/4108000/',
        image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4108000/00ae7d0e0fd0ad72635bddb1dd80ee68cc94eed5/header.jpg?t=1786561627',
    },
    {
        title: 'PEAK',
        href: 'https://store.steampowered.com/app/3527290/PEAK/',
        image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3527290/31bac6b2eccf09b368f5e95ce510bae2baf3cfcd/header.jpg?t=1792684718',
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

function BigWalk(){
    return (
        <>
            <div class='min-h-screen px-16 lg:px-64 py-8 flex flex-col '>
                
                <section class='grid grid-cols-1 lg:grid-cols-2'>
                    <img class='w-full h-auto rounded-2xl lg:w-auto' src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1478500/62eeee1507dbac905e128a62f2ce690550238db0/header.jpg?t=1785911674" alt="" /> 
                    <div class='py-2 lg:px-2 place-content-center'>
                        <h1 class=' text-4xl lg:text-xl font-bold'>Big Walk</h1>
                        <p class='text-3xl lg:text-base text-wrap' >Hang out and get lost with close friends in a big world. A cooperative online walker-talker from the creators of Untitled Goose Game.</p>
                        <p class='text-2xl lg:text-sm'> <a class='font-bold'>Dev: </a> <a href='https://househouse.com/' class='underline'>House House</a></p>
                        <p class='text-2xl lg:text-sm'> <a class='font-bold'>Publisher: </a> <a href='https://panic.com/' class='underline'>Panic</a></p>                        
                        <p class='text-2xl lg:text-sm'> <a class='font-bold'>Steam:</a> <a>Very Positive (80%)</a> • <a class='font-bold'>Metacritic:</a> <a>94</a> • <a class='font-bold'>IGN:</a> <a>9/10</a></p>
                        
                    </div>
                    <div class='text-3xl lg:text-lg py-4'>Seciones Largas • Cooperativo • Puzzle • Mundo Abierto • Exploracion</div>
                </section>
                <GameCarousel title="Similares" games={similars}/>
                
            </div>
        </>
    );
}

export default BigWalk
