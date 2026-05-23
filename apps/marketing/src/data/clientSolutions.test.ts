import { describe, expect, it } from 'vitest'

import { clientSolutions } from './clientSolutions'

describe('clientSolutions', () => {
  it('exposes exactly 8 solutions', () => {
    expect(clientSolutions).toHaveLength(8)
  })

  it('every solution has label, href, and decorative image source', () => {
    clientSolutions.forEach((s) => {
      expect(typeof s.label).toBe('string')
      expect(s.label.length).toBeGreaterThan(0)
      expect(s.href).toMatch(/^\//)
      expect(s.image.src).toMatch(/^\//)
      expect(s.image.alt.length).toBeGreaterThan(0)
    })
  })

  it('image filenames reference real public assets (case-study or portfolio)', () => {
    clientSolutions.forEach((s) => {
      expect(s.image.src).toMatch(/(case-studies|portfolio|logos)/)
    })
  })
})
