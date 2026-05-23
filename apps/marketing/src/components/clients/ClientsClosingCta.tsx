import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

interface ClientsClosingCtaProps {
  /** Element ID of the portrait grid to anchor the secondary link to. */
  scrollTargetId: string
}

export const clientsCta = {
  headline: 'See the friction in your own operation?',
  body: 'Start with a workflow diagnostic before deciding what should be built.',
  label: 'Start With a Diagnostic',
  to: '/diagnostic',
} as const

export function ClientsClosingCta({ scrollTargetId }: ClientsClosingCtaProps) {
  return (
    <section className="py-32 flex flex-col justify-center items-center text-center px-6 relative z-10">
      <p className="text-xs font-bold tracking-[0.3em] text-ink-muted uppercase mb-8">
        Your bottleneck, next
      </p>
      <h2 className="font-serif text-4xl md:text-7xl max-w-4xl">
        {clientsCta.headline}
      </h2>
      <p className="mt-6 max-w-2xl text-ink-muted text-sm md:text-base leading-relaxed">
        {clientsCta.body}
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4">
        <Link
          to={clientsCta.to}
          className="group inline-flex items-center justify-center gap-3 border border-gold bg-gold px-7 py-4 text-sm uppercase tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          {clientsCta.label}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
        <a
          href={`#${scrollTargetId}`}
          className="inline-flex items-center justify-center gap-3 border border-line px-7 py-4 text-sm uppercase tracking-widest text-ink transition-all duration-300 hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Read all stories
        </a>
      </div>
    </section>
  )
}
