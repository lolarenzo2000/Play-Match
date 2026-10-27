import { useRef } from 'react'
import { Link } from 'react-router'

function GameCarousel({ title, games, moreHref }) {
    const carouselRef = useRef(null)

    const scrollCarousel = (direction) => {
        if (!carouselRef.current) return

        carouselRef.current.scrollBy({
            left: carouselRef.current.clientWidth * direction * 0.8,
            behavior: 'smooth',
        })
    }

    return (
        <section className="pt-3 max-sm:px-4 py-6" aria-label={title}>
            <div className="mb-1 flex items-center justify-between">
                <h2 className="m-0 text-lg font-bold">{title}</h2>
                <div className="flex items-center gap-3">
                    <button className="hidden size-8 bg-blue-600 text-white items-center justify-center rounded-full border border-slate-300 text-xl leading-none hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:inline-flex" type="button" aria-label={`Desplazar ${title} hacia la izquierda`} onClick={() => scrollCarousel(-1)}>
                        <span aria-hidden="true">‹</span>
                    </button>
                    <button className="hidden size-8 bg-blue-600 text-white items-center justify-center rounded-full border border-slate-300 text-xl leading-none hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:inline-flex" type="button" aria-label={`Desplazar ${title} hacia la derecha`} onClick={() => scrollCarousel(1)}>
                        <span aria-hidden="true">›</span>
                    </button>
                    <Link className="text-[15px] text-gray-900 underline underline-offset-2" to={moreHref}>
                        ver más
                    </Link>
                </div>
            </div>
            <div ref={carouselRef} className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
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

export default GameCarousel