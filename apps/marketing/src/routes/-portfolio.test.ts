import { describe, expect, it } from 'vitest'

import { caseStudies } from './portfolio'

describe('work case studies', () => {
  it('presents work as workflow outcomes instead of iframe previews', () => {
    expect(caseStudies.length).toBeGreaterThanOrEqual(4)
    expect(caseStudies.every((study) => study.problem.length > 0)).toBe(true)
    expect(caseStudies.every((study) => study.diagnosis.length > 0)).toBe(true)
    expect(caseStudies.every((study) => study.build.length > 0)).toBe(true)
    expect(caseStudies.every((study) => study.outcome.length > 0)).toBe(true)
    expect(
      caseStudies.some((study) => study.systemType.includes('Workflow')),
    ).toBe(true)
  })
})
