import { ExternalLink } from 'lucide-react'

import type { CaseStudy } from '@/data/caseStudies'

import { CaseStudyImage } from './CaseStudyImage'

interface CaseStudyHeroProps {
  caseStudy: CaseStudy
}

export function CaseStudyHero({ caseStudy }: CaseStudyHeroProps) {
  const { name, industry, systemType, url, hero } = caseStudy

  return (
    <section className="relative z-10 px-6 md:px-12 pt-40 md:pt-48 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <span className="text-gold text-[10px] tracking-[0.35em] uppercase font-bold animate-fade-in-up">
          {industry} · {systemType}
        </span>
        <h1
          className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05] animate-fade-in-up opacity-0"
          style={{ animationDelay: '120ms' }}
        >
          {name}
        </h1>
        <p
          className="mt-6 max-w-3xl text-ink-sub text-lg md:text-2xl font-light leading-relaxed animate-fade-in-up opacity-0"
          style={{ animationDelay: '220ms' }}
        >
          {hero.tagline}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 border border-gold bg-gold px-7 py-4 text-sm uppercase tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-gold animate-fade-in-up opacity-0"
          style={{ animationDelay: '320ms' }}
        >
          Visit live site
          <ExternalLink className="size-4" />
        </a>

        {hero.image ? (
          <div
            className="mt-16 animate-fade-in-up opacity-0"
            style={{ animationDelay: '420ms' }}
          >
            <CaseStudyImage image={hero.image} priority />
          </div>
        ) : null}
      </div>
    </section>
  )
}
