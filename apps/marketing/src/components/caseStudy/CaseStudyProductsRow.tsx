import { useState } from 'react'

import type { CaseStudy } from '@/data/caseStudies'
import { BrandIcon } from '@/components/BrandIcon'

interface CaseStudyProductsRowProps {
  study: CaseStudy
}

const DEFAULT_VISIBLE = 6

/**
 * Detail-page "Products used" — vertical stacked list of stack items with
 * brand icons. One item per row, left-aligned. Mirrors Stripe /customers/figma
 * directly below the hero.
 *
 * Region + company-size labels live in a separate strip; see
 * CaseStudyRegionStrip.
 */
export function CaseStudyProductsRow({ study }: CaseStudyProductsRowProps) {
  const [expanded, setExpanded] = useState(false)
  const allItems = (study.atAGlance.stack ?? []).flatMap((c) => c.items)
  const visibleItems = expanded ? allItems : allItems.slice(0, DEFAULT_VISIBLE)
  const moreCount = Math.max(0, allItems.length - DEFAULT_VISIBLE)

  if (allItems.length === 0) return null

  return (
    <section className="relative z-10 px-6 md:px-12 py-8 md:py-10 border-t border-line-faint">
      <div className="max-w-3xl">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink-muted mb-4">
          Products used
        </p>
        <ul aria-label="Products used" className="flex flex-col gap-3">
          {visibleItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 text-sm md:text-base text-ink"
            >
              <BrandIcon
                slug={item.iconSlug}
                label={item.label}
                className="size-5 text-ink-muted shrink-0"
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
                + {moreCount} more items
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    </section>
  )
}
