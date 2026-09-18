import { describe, expect, it } from 'vitest'

describe('Vitest shared setup', () => {
  it('runs with the jsdom environment', () => {
    expect(document).toBeDefined()
  })
})