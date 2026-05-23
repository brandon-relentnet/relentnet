import { useState } from 'react'

import type { CaseStudyAtAGlance } from '@/data/caseStudies'

import { BrandIcon } from '@/components/BrandIcon'

interface CaseStudyStackCardProps {
  name: string
  atAGlance: CaseStudyAtAGlance
  industry: string
}

const DEFAULT_VISIBLE_ITEMS = 4

/**
 * Sticky right card on /clients/$slug, modeled on Stripe's "Products used"
 * card. Shows the case study's name, a flat stack list (categories from
 * the data model are flattened for the rail-card UI) with a "+ N more"
 * inline disclosure, an optional Global row with a colored brand logo,
 * and an Industry row repurposed from Stripe's "Enterprise" slot.
 */
export function CaseStudyStackCard({
  name,
  atAGlance,
  industry,
}: CaseStudyStackCardProps) {
  const [expanded, setExpanded] = useState(false)

  const allItems = (atAGlance.stack ?? []).flatMap((cat) => cat.items)
  const visibleItems = expanded
    ? allItems
    : allItems.slice(0, DEFAULT_VISIBLE_ITEMS)
  const hiddenCount = Math.max(0, allItems.length - DEFAULT_VISIBLE_ITEMS)

  return (
    <aside className="lg:sticky lg:top-32 self-start border border-line bg-card p-6">
      <h2 className="font-serif text-2xl">{name}</h2>

      {allItems.length > 0 ? (
        <section className="mt-6">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink-muted mb-3">
            Stack
          </p>
          <ul className="space-y-2">
            {visibleItems.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <BrandIcon
                  slug={item.iconSlug}
                  label={item.label}
                  className="size-4 fill-current text-ink-sub flex-shrink-0"
                />
                <span className="text-sm text-ink-sub">{item.label}</span>
              </li>
            ))}
          </ul>
          {!expanded && hiddenCount > 0 ? (
            <button
              type="button"
              onClick={() => setExpanded(true)}
              className="mt-3 text-xs text-ink-muted hover:text-gold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              + {hiddenCount} more
            </button>
          ) : null}
        </section>
      ) : null}

      {atAGlance.global ? (
        <section className="mt-6 pt-6 border-t border-line-faint">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink-muted mb-3">
            Global
          </p>
          <div className="flex items-center gap-3">
            <img
              src={atAGlance.global.logoSrc}
              alt={atAGlance.global.label}
              className="size-5 flex-shrink-0"
            />
            <span className="text-sm text-ink-sub">
              {atAGlance.global.label}
            </span>
          </div>
        </section>
      ) : null}

      <section className="mt-6 pt-6 border-t border-line-faint">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-ink-muted mb-3">
          Industry
        </p>
        <p className="text-sm text-ink-sub">{industry}</p>
      </section>
    </aside>
  )
}
