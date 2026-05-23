import { Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { getAdjacentCaseStudies } from '@/data/caseStudies'
import { useReveal } from '@/hooks/useReveal'

interface CaseStudyNavProps {
  slug: string
}

export function CaseStudyNav({ slug }: CaseStudyNavProps) {
  const { ref, isRevealed } = useReveal(0.15)
  const { prev, next } = getAdjacentCaseStudies(slug)

  if (!prev && !next) {
    return null
  }

  const hasBoth = prev !== null && next !== null
  const gridClass = hasBoth
    ? 'grid grid-cols-1 md:grid-cols-2 gap-6'
    : 'grid grid-cols-1 gap-6'

  return (
    <nav
      ref={ref}
      aria-label="Case study navigation"
      className={`relative z-10 px-6 md:px-12 py-16 md:py-20 border-y border-line ${
        isRevealed ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      <div className={`max-w-6xl mx-auto ${gridClass}`}>
        {prev ? (
          <Link
            to="/clients/$slug"
            params={{ slug: prev.slug }}
            className="group border border-line bg-card p-6 md:p-8 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-colors"
          >
            <span className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-ink-muted group-hover:text-gold transition-colors">
              <ArrowLeft className="size-4" />
              Previous
            </span>
            <span className="block mt-4 text-[10px] tracking-[0.3em] uppercase text-gold">
              {prev.industry}
            </span>
            <p className="mt-2 font-serif text-2xl md:text-3xl">{prev.name}</p>
          </Link>
        ) : null}
        {next ? (
          <Link
            to="/clients/$slug"
            params={{ slug: next.slug }}
            className="group border border-line bg-card p-6 md:p-8 hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-colors md:text-right"
          >
            <span className="flex items-center justify-end gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-ink-muted group-hover:text-gold transition-colors">
              Next
              <ArrowRight className="size-4" />
            </span>
            <span className="block mt-4 text-[10px] tracking-[0.3em] uppercase text-gold">
              {next.industry}
            </span>
            <p className="mt-2 font-serif text-2xl md:text-3xl">{next.name}</p>
          </Link>
        ) : null}
      </div>
    </nav>
  )
}
