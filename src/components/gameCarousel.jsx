import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

function GameCarousel({ title, games, moreHref }) {
    const carouselRef = useRef(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(false)

    useEffect(() => {
        const carousel = carouselRef.current
        if (!carousel) return

        const updateScrollButtons = () => {
            setCanScrollLeft(carousel.scrollLeft > 1)
            setCanScrollRight(carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 1)
        }

        updateScrollButtons()
        carousel.addEventListener('scroll', updateScrollButtons)
        const resizeObserver = new ResizeObserver(updateScrollButtons)
        resizeObserver.observe(carousel)

        return () => {
            carousel.removeEventListener('scroll', updateScrollButtons)
            resizeObserver.disconnect()
        }
    }, [games.length])

    const scrollCarousel = (direction) => {
        if (!carouselRef.current) return

        carouselRef.current.scrollBy({
            left: carouselRef.current.clientWidth * direction * 0.8,
            behavior: 'smooth',
        })
    }

    return (
        <section className="w-full min-w-0 py-4 pt-3 max-sm:px-4" aria-label={title}>
            <div className="mb-1 flex items-center justify-between">
                <h2 className="m-0 text-lg font-bold">{title}</h2>
                {moreHref && (
                    <Link className="text-[15px] text-slate-200 underline underline-offset-2" to={moreHref}>
                        ver más
                    </Link>
                )}
            </div>
            <div className="relative w-full min-w-0">
                <div ref={carouselRef} className="flex w-full min-w-0 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {games.map((game, index) => (
                        game.title && game.href && game.image ? (
                            game.href.startsWith('/') ? (
                                <Link
                                    className="group relative aspect-[2.15/1] w-[310px] shrink-0 overflow-hidden rounded-lg bg-slate-800 text-left no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 max-sm:w-[260px]"
                                    to={game.href}
                                    key={`${game.title}-${index}`}
                                >
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
                                </Link>
                            ) : (
                                <a className="group relative aspect-[2.15/1] w-[310px] shrink-0 overflow-hidden rounded-lg bg-slate-800 text-left no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 max-sm:w-[260px]" href={game.href} key={`${game.title}-${index}`} rel="noreferrer" target="_blank">
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
                            )
                        ) : (
                            <div key={`placeholder-${index}`} className="aspect-[2.15/1] w-[310px] shrink-0 rounded-lg bg-slate-800 max-sm:w-[260px]" aria-hidden="true" />
                        )
                    ))}
                </div>
                {canScrollLeft && (
                    <>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0b1120] to-transparent" />
                        <button className="absolute left-0 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center text-3xl leading-none text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400" type="button" aria-label={`Desplazar ${title} hacia la izquierda`} onClick={() => scrollCarousel(-1)}>
                            <span aria-hidden="true">‹</span>
                        </button>
                    </>
                )}
                {canScrollRight && (
                    <>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0b1120] to-transparent" />
                        <button className="absolute right-0 top-1/2 inline-flex size-8 -translate-y-1/2 items-center justify-center text-3xl leading-none text-slate-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400" type="button" aria-label={`Desplazar ${title} hacia la derecha`} onClick={() => scrollCarousel(1)}>
                            <span aria-hidden="true">›</span>
                        </button>
                    </>
                )}
            </div>
        </section>
    )
}

export default GameCarousel