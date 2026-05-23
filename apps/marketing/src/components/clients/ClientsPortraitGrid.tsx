import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { caseStudies } from '@/data/caseStudies'

/**
 * Featured portrait grid. The first tile (Scrollr) spans 2 columns on
 * `lg:` to anchor the grid; the rest flow as single-column tiles. Each
 * tile shows the case study's hero image as a photographic portrait with
 * a gold industry pill, name, and tagline below.
 */
export function ClientsPortraitGrid() {
  return (
    <section className="relative z-10 px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-8">
          Client stories
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => {
            const isLead = index === 0
            return (
              <Link
                key={study.slug}
                to="/clients/$slug"
                params={{ slug: study.slug }}
                className={`group block border border-line bg-card overflow-hidden hover:border-gold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                  isLead ? 'lg:col-span-2 lg:row-span-1' : ''
                }`}
              >
                <div className="aspect-video bg-inset overflow-hidden">
                  {study.hero.image ? (
                    <img
                      src={study.hero.image.src}
                      alt={study.hero.image.alt}
                      className="h-full w-full object-cover opacity-90 grayscale-25 transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center px-6 text-center bg-inset">
                      <p className="font-serif text-xl text-ink-muted">
                        {study.systemType}
                      </p>
                    </div>
                  )}
                </div>
                <div className="p-5 md:p-6">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold">
                    {study.industry}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl md:text-3xl">
                    {study.name}
                  </h3>
                  <p className="mt-3 text-sm text-ink-sub leading-relaxed">
                    {study.hero.tagline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs text-gold uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                    Read the story
                    <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
