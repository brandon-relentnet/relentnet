import type { StoryBlock } from '@/data/caseStudies'

import { CaseStudyImage } from './CaseStudyImage'

interface CaseStudySectionProps {
  number: string
  label: string
  title: string
  blocks: ReadonlyArray<StoryBlock>
  alignRight?: boolean
}

export function CaseStudySection({
  number,
  label,
  title,
  blocks,
  alignRight = false,
}: CaseStudySectionProps) {
  if (blocks.length === 0) {
    return null
  }

  return (
    <section className="relative z-10 px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <span
          className={`block text-[7rem] md:text-[10rem] font-serif text-black/[0.06] dark:text-white/[0.03] leading-none select-none -mb-10 md:-mb-14 ${
            alignRight ? 'md:text-right' : ''
          }`}
        >
          {number}
        </span>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div
            className={`md:col-span-3 ${alignRight ? 'md:order-last md:text-right' : ''}`}
          >
            <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase block">
              {label}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl mt-2">{title}</h2>
          </div>

          <div className={`md:col-span-9 ${alignRight ? 'md:order-first' : ''}`}>
            <StoryBlocks blocks={blocks} />
          </div>
        </div>
      </div>
    </section>
  )
}

interface StoryBlocksProps {
  blocks: ReadonlyArray<StoryBlock>
}

function StoryBlocks({ blocks }: StoryBlocksProps) {
  return (
    <div className="space-y-6 max-w-2xl">
      {blocks.map((block, index) => {
        if (block.type === 'p') {
          return (
            <p
              key={index}
              className="text-ink-sub leading-relaxed text-base md:text-lg"
            >
              {block.text}
            </p>
          )
        }
        if (block.type === 'image') {
          return <CaseStudyImage key={index} image={block.image} />
        }
        // quote
        return (
          <figure key={index} className="border-l-2 border-gold/40 pl-6 my-8">
            <blockquote className="font-serif italic text-xl md:text-2xl text-ink-sub leading-relaxed">
              {block.text}
            </blockquote>
            {block.attribution ? (
              <figcaption className="mt-3 text-[10px] font-bold tracking-[0.3em] uppercase text-ink-muted">
                {block.attribution}
              </figcaption>
            ) : null}
          </figure>
        )
      })}
    </div>
  )
}
