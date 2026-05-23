import { useState } from 'react'

import type { CaseStudy } from '@/data/caseStudies'
import { BrandIcon } from '@/components/BrandIcon'

interface CaseStudyProductsRowProps {
  study: CaseStudy
}

const DEFAULT_VISIBLE = 6

/**
 * Detail-page "Products used" pill row. Flat horizontal list of stack items
 * with brand icons, followed by region and company-size pills.
 * Mirrors Stripe /customers/figma row directly below the hero.
 */
export function CaseStudyProductsRow({ study }: CaseStudyProductsRowProps) {
  const [expanded, setExpanded] = useState(false)
  const allItems = (study.atAGlance.stack ?? []).flatMap((c) => c.items)
  const visibleItems = expanded ? allItems : allItems.slice(0, DEFAULT_VISIBLE)
  const moreCount = Math.max(0, allItems.length - DEFAULT_VISIBLE)

  const sizeLabel =
    study.companySize === 'placeholder'
      ? undefined
      : study.companySize.charAt(0).toUpperCase() + study.companySize.slice(1)

  if (allItems.length === 0 && !study.region && !sizeLabel) return null

  return (
    <section className="relative z-10 px-6 md:px-12 py-8 border-t border-b border-line-faint">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink-muted mb-4">
          Products used
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 items-center">
          {visibleItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 text-sm text-ink-sub"
            >
              <BrandIcon
                slug={item.iconSlug}
                label={item.label}
                className="size-4 text-ink-muted"
              />
              <span>{item.label}</span>
            </li>
          ))}
          {!expanded && moreCount > 0 ? (
            <li>
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="text-sm text-gold hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                + {moreCount} more
              </button>
            </li>
          ) : null}
          {study.region ? (
            <li className="text-sm text-ink-sub border-l border-line-faint pl-6 ml-2">
              {study.region}
            </li>
          ) : null}
          {sizeLabel ? (
            <li className="text-sm text-ink-sub border-l border-line-faint pl-6 ml-2">
              {sizeLabel}
            </li>
          ) : null}
        </ul>
      </div>
    </section>
  )
}
