import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

import { useReveal } from '@/hooks/useReveal'

export function CaseStudyCta() {
  const { ref, isRevealed } = useReveal(0.2)

  return (
    <section
      ref={ref}
      className="py-32 flex flex-col justify-center items-center text-center px-6 relative z-10"
    >
      <p
        className={`text-xs font-bold tracking-[0.3em] text-ink-muted uppercase mb-8 ${
          isRevealed ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        Your bottleneck, next
      </p>
      <h2
        className={`font-serif text-4xl md:text-7xl max-w-4xl ${
          isRevealed ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={isRevealed ? { animationDelay: '150ms' } : undefined}
      >
        See the friction in your own operation?
      </h2>
      <p
        className={`mt-6 max-w-2xl text-ink-muted text-sm md:text-base leading-relaxed ${
          isRevealed ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={isRevealed ? { animationDelay: '300ms' } : undefined}
      >
        Start with a workflow diagnostic before deciding what should be built.
      </p>
      <Link
        to="/diagnostic"
        className={`group mt-10 inline-flex items-center justify-center gap-3 border border-gold bg-gold px-7 py-4 text-sm uppercase tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
          isRevealed ? 'animate-fade-in-up' : 'opacity-0'
        }`}
        style={isRevealed ? { animationDelay: '450ms' } : undefined}
      >
        Start With a Diagnostic
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </Link>
    </section>
  )
}
