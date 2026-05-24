import type { CaseStudy, CaseStudyMetric } from '@/data/caseStudies'

interface CaseStudyBigStatsProps {
  study: CaseStudy
}

function isDelta(metric: CaseStudyMetric): boolean {
  return (
    typeof metric.from === 'string' &&
    metric.from.length > 0 &&
    typeof metric.to === 'string' &&
    metric.to.length > 0
  )
}

/**
 * Detail-page vertical stat list. 3-5 huge serif numbers stacked left-aligned.
 * Mirrors Stripe /customers/figma's vertical stats block.
 *
 * Renders nothing if the study has 0 metrics.
 */
export function CaseStudyBigStats({ study }: CaseStudyBigStatsProps) {
  const metrics = study.atAGlance.metrics ?? []
  if (metrics.length === 0) return null

  return (
    <section className="relative z-10 px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-3xl">
        {metrics.map((metric) => (
          <div key={metric.label} className="mb-12 last:mb-0">
            {isDelta(metric) ? (
              <p className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink-em leading-none">
                <span className="text-ink-muted">{metric.from}</span>
                <span className="mx-3 text-gold">→</span>
                <span>{metric.to}</span>
              </p>
            ) : (
              <p className="font-serif text-5xl md:text-7xl lg:text-8xl text-ink-em leading-none">
                {metric.value}
              </p>
            )}
            <p className="mt-4 text-base md:text-lg text-ink-sub leading-relaxed">
              {metric.label}
              {metric.context ? (
                <span className="block mt-1 text-sm text-ink-muted">
                  {metric.context}
                </span>
              ) : null}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
