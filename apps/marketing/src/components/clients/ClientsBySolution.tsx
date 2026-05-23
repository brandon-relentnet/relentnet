import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { clientSolutions } from '@/data/clientSolutions'

const FEATURED_IMAGE_INDEXES = [0, 3, 5] as const

/**
 * "Customers by solution" — left column of 8 solution chip links + right
 * column of 3 decorative product-mockup screenshots in faux-browser chrome.
 * Mirrors Stripe /customers's "Customers by solution" section.
 */
export function ClientsBySolution() {
  const featured = FEATURED_IMAGE_INDEXES.map((i) => clientSolutions[i])

  return (
    <section className="relative z-10 px-6 md:px-12 py-20 md:py-28 border-t border-line-faint">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink-muted mb-3">
          Customers by solution
        </p>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl max-w-3xl mb-6">
          We obsess over diagnosed friction so our clients don't have to.
        </h2>
        <p className="text-ink-sub text-base md:text-lg leading-relaxed max-w-2xl mb-16 md:mb-20">
          Every engagement starts with diagnosing the real source of operational
          friction. We focus on building the right system on top of that
          diagnosis — so you stop stitching together band-aids and start moving
          cleaner.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <ul className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {clientSolutions.map((s) => (
              <li key={s.label}>
                <Link
                  to={s.href}
                  className="group inline-flex items-center gap-2 text-sm md:text-base text-ink hover:text-gold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <span>{s.label}</span>
                  <ArrowRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {featured.map((s, i) => (
                <div
                  key={s.label}
                  className={`overflow-hidden border border-line-faint bg-card ${
                    i === 1 ? 'mt-12 md:mt-16' : ''
                  } ${i === 2 ? '-mt-6 md:-mt-8' : ''}`}
                >
                  <div className="flex items-center gap-1.5 border-b border-line-faint bg-inset px-3 py-2">
                    <span className="size-2 rounded-full bg-ink-muted/30" />
                    <span className="size-2 rounded-full bg-ink-muted/30" />
                    <span className="size-2 rounded-full bg-ink-muted/30" />
                  </div>
                  <img
                    src={s.image.src}
                    alt={s.image.alt}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
