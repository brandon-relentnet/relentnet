import { describe, expect, it } from 'vitest'

import {
  homepageHero,
  methodSteps,
  operationalPains,
  problemsSolved,
} from './index'

describe('homepage positioning content', () => {
  it('leads with workflow and custom software positioning', () => {
    expect(homepageHero.headline).toBe(
      'Your business has outgrown disconnected tools.',
    )
    expect(homepageHero.body).toContain('custom software systems')
    expect(homepageHero.primaryCta).toBe('Map My Workflow')
  })

  it('names operational pain, method, and problems solved', () => {
    expect(operationalPains).toContain('Spreadsheet chaos')
    expect(methodSteps.map((step) => step.title)).toEqual([
      'Discover',
      'Diagnose',
      'Design',
      'Build',
      'Steward',
    ])
    expect(problemsSolved).toContain('Client portals')
  })
})
