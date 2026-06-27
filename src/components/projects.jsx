import { useState, useEffect } from 'react'
import './projects.css'

const PROJECT = {
    title: 'The Event Community',
    role: 'Founding Engineer',
    year: '2025',
    description:
        'An events platform connecting vendors and clients. An entire workflow from booking jobs to payments.',
    tech: ['React', 'Next.js', 'PostgreSQL', 'Supabase', 'Express'],
    images: [
        '/1.png',
        '/2.png',
        '/3.png',
        '/4.png',
    ],
}

function Projects() {
    const images = PROJECT.images
    const total = images.length
    const [current, setCurrent] = useState(0)

    const goTo = (index) => {
        if (total <= 0) return
        setCurrent(((index % total) + total) % total)
    }

    const next = () => setCurrent((prev) => (prev + 1) % total)
    const prev = () => setCurrent((prev) => (prev - 1 + total) % total)

    useEffect(() => {
        if (total <= 1) return
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % total)
        }, 5000)
        return () => clearInterval(timer)
    }, [total])

    return (
        <section id="Projects" className="projects w-full p-16 pt-25 pb-16 flex flex-col gap-10">
            <div>
                <h1 className="text-7xl mb-2">Projects</h1>
                <a href="https://theeventcommunity.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors underline underline-offset-2">theeventcommunity.com</a>
            </div>

            <div className="projects-showcase flex flex-col lg:flex-row gap-10 flex-1">
                <div className="slideshow flex-1 flex flex-col gap-4">
                    <div className="slideshow-viewport relative overflow-hidden rounded-lg">
                        <div
                            className="slideshow-track"
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {images.map((src, i) => (
                                <div key={src} className="slideshow-slide">
                                    <img
                                        src={src}
                                        alt={`${PROJECT.title} screenshot ${i + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            className="slideshow-btn slideshow-btn--prev"
                            onClick={prev}
                            aria-label="Previous slide"
                        >
                            ‹
                        </button>
                        <button
                            className="slideshow-btn slideshow-btn--next"
                            onClick={next}
                            aria-label="Next slide"
                        >
                            ›
                        </button>

                        <span className="slideshow-counter">
                            {current + 1} / {total}
                        </span>
                    </div>

                    <div className="slideshow-dots flex justify-center gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                className={`slideshow-dot ${i === current ? 'active' : ''}`}
                                onClick={() => goTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="project-info flex-1 flex flex-col justify-center gap-6">
                    <div>
                        <h2 className="text-4xl mb-1">{PROJECT.title}</h2>
                        <p className="text-neutral-400">
                            {PROJECT.role} · {PROJECT.year}
                        </p>
                    </div>
                    <p className="text-lg leading-relaxed text-neutral-300 max-w-lg">
                        {PROJECT.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {PROJECT.tech.map((tag) => (
                            <span key={tag} className="project-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
