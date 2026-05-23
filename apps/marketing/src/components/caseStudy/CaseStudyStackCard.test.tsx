import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { CaseStudyStackCard } from './CaseStudyStackCard'
import type { CaseStudyAtAGlance } from '@/data/caseStudies'

const atAGlance: CaseStudyAtAGlance = {
  stack: [
    {
      category: 'Client',
      items: [
        { label: 'Tauri v2', iconSlug: 'tauri' },
        { label: 'React 19', iconSlug: 'react' },
        { label: 'Vite 7', iconSlug: 'vite' },
        { label: 'TanStack Router' },
        { label: 'Tailwind 4', iconSlug: 'tailwindcss' },
      ],
    },
    {
      category: 'Server',
      items: [{ label: 'Go (Fiber)', iconSlug: 'go' }],
    },
  ],
  global: { label: 'Cloudflare Global CDN', logoSrc: '/logos/cloudflare.svg' },
}

describe('CaseStudyStackCard', () => {
  it('renders the company name at the top of the card', () => {
    render(
      <CaseStudyStackCard name="Scrollr" atAGlance={atAGlance} industry="Consumer Software" />,
    )
    expect(screen.getByRole('heading', { name: 'Scrollr' })).toBeInTheDocument()
  })

  it('shows 4 items by default and a "+ N more" disclosure', () => {
    render(
      <CaseStudyStackCard name="Scrollr" atAGlance={atAGlance} industry="Consumer Software" />,
    )
    // The combined stack has 6 items total; show 4, expose disclosure for the rest.
    expect(screen.getByText('Tauri v2')).toBeInTheDocument()
    expect(screen.getByText('React 19')).toBeInTheDocument()
    expect(screen.getByText('Vite 7')).toBeInTheDocument()
    expect(screen.getByText('TanStack Router')).toBeInTheDocument()
    expect(screen.queryByText('Tailwind 4')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /\+ 2 more/i })).toBeInTheDocument()
  })

  it('expands to show all items when disclosure is clicked', async () => {
    const user = userEvent.setup()
    render(
      <CaseStudyStackCard name="Scrollr" atAGlance={atAGlance} industry="Consumer Software" />,
    )
    await user.click(screen.getByRole('button', { name: /\+ 2 more/i }))
    expect(screen.getByText('Tailwind 4')).toBeInTheDocument()
    expect(screen.getByText('Go (Fiber)')).toBeInTheDocument()
  })

  it('does not render the disclosure when item count is at or below the default', () => {
    const fourItems: CaseStudyAtAGlance = {
      stack: [
        {
          category: 'Client',
          items: [
            { label: 'Tauri v2', iconSlug: 'tauri' },
            { label: 'React 19', iconSlug: 'react' },
            { label: 'Vite 7', iconSlug: 'vite' },
            { label: 'TanStack Router' },
          ],
        },
      ],
    }
    render(
      <CaseStudyStackCard name="Scrollr" atAGlance={fourItems} industry="Consumer Software" />,
    )
    expect(screen.queryByRole('button', { name: /more/i })).not.toBeInTheDocument()
  })

  it('renders the global row with logo and label when present', () => {
    render(
      <CaseStudyStackCard name="Scrollr" atAGlance={atAGlance} industry="Consumer Software" />,
    )
    expect(screen.getByAltText(/cloudflare/i)).toBeInTheDocument()
    expect(screen.getByText('Cloudflare Global CDN')).toBeInTheDocument()
  })

  it('omits the global row when atAGlance.global is absent', () => {
    render(
      <CaseStudyStackCard
        name="CBG"
        atAGlance={{ ...atAGlance, global: undefined }}
        industry="Commercial Construction"
      />,
    )
    expect(screen.queryByAltText(/cloudflare/i)).not.toBeInTheDocument()
  })

  it('always renders the industry row', () => {
    render(
      <CaseStudyStackCard name="Scrollr" atAGlance={atAGlance} industry="Consumer Software" />,
    )
    expect(screen.getByText('Consumer Software')).toBeInTheDocument()
  })
})
