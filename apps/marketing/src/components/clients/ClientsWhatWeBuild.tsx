import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'

interface ServiceArea {
  label: string
  description: string
  to: '/diagnostic' | '/process'
}

const SERVICE_AREAS: ReadonlyArray<ServiceArea> = [
  {
    label: 'Diagnose',
    description:
      'Workflow diagnostic that finds the friction before anything is built.',
    to: '/diagnostic',
  },
  {
    label: 'Design & Build',
    description:
      'Product, system, and infrastructure work scoped to the diagnosis.',
    to: '/process',
  },
  {
    label: 'Steward',
    description:
      'Ongoing care for what we ship — operations, hosting, iteration.',
    to: '/process',
  },
]

export function ClientsWhatWeBuild() {
  return (
    <section className="relative z-10 px-6 md:px-12 py-20 md:py-24 border-t border-line">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-3">
          What we build
        </p>
        <h2 className="font-serif text-3xl md:text-5xl mb-10">
          The shape of an engagement
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_AREAS.map((area) => (
            <li key={area.label}>
              <Link
                to={area.to}
                className="group block border border-line bg-card p-6 hover:border-gold transition-colors h-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <h3 className="font-serif text-2xl">{area.label}</h3>
                <p className="mt-3 text-sm text-ink-sub leading-relaxed">
                  {area.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs text-gold uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                  Learn more
                  <ArrowRight className="size-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
