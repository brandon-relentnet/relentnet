import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { CaseStudyProductsRow } from '../CaseStudyProductsRow'
import { caseStudies } from '@/data/caseStudies'

describe('CaseStudyProductsRow', () => {
  it('renders stack items as a vertical list (one per row)', () => {
    const study = caseStudies.find((s) => s.slug === 'scrollr')
    if (!study) throw new Error('Fixture scrollr not found')
    render(<CaseStudyProductsRow study={study} />)
    const list = screen.getByRole('list', { name: /products used/i })
    expect(list.className).toMatch(/flex-col/)
    expect(list.className).not.toMatch(/flex-wrap/)
  })

  it('does not render region or company-size pills (now lives in the region strip)', () => {
    const study = caseStudies.find((s) => s.slug === 'scrollr')
    if (!study) throw new Error('Fixture scrollr not found')
    render(<CaseStudyProductsRow study={study} />)
    expect(screen.queryByText(/^global$/i)).toBeNull()
    expect(screen.queryByText(/^startup$/i)).toBeNull()
    expect(screen.queryByText(/^growth$/i)).toBeNull()
    expect(screen.queryByText(/^enterprise$/i)).toBeNull()
  })
})
