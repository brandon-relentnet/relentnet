import type { CaseStudy } from '@/data/caseStudies'

interface CaseStudyRegionStripProps {
  region?: string
  companySize: CaseStudy['companySize']
}

/**
 * Detail-page region + tier strip. Small uppercase-tracking labels under
 * the products-used list. Mirrors Stripe /customers/figma's
 * "Global · Enterprise" line. Renders nothing if both inputs are empty.
 */
export function CaseStudyRegionStrip({
  region,
  companySize,
}: CaseStudyRegionStripProps) {
  const sizeLabel =
    companySize === 'placeholder'
      ? undefined
      : companySize.charAt(0).toUpperCase() + companySize.slice(1)

  if (!region && !sizeLabel) return null

  return (
    <section className="relative z-10 px-6 md:px-12 pb-8 md:pb-10">
      <div className="max-w-3xl flex flex-wrap gap-x-8 gap-y-2">
        {region ? (
          <span className="text-sm uppercase tracking-[0.2em] text-ink-muted">
            {region}
          </span>
        ) : null}
        {sizeLabel ? (
          <span className="text-sm uppercase tracking-[0.2em] text-ink-muted">
            {sizeLabel}
          </span>
        ) : null}
      </div>
    </section>
  )
}
