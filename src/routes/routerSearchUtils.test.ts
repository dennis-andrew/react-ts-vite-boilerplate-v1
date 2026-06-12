import {
  readBooleanSearchParam,
  readEnumSearchParam,
  readPositiveIntegerSearchParam,
  readStringSearchParam,
  readTrimmedStringSearchParam,
} from './routerSearchUtils'

describe('routerSearchUtils', () => {
  it('should read string search params', () => {
    expect(readStringSearchParam('dashboard')).toBe('dashboard')
    expect(readStringSearchParam(undefined, 'fallback')).toBe('fallback')
  })

  it('should read trimmed string search params', () => {
    expect(readTrimmedStringSearchParam('  active  ')).toBe('active')
  })

  it('should read positive integer search params', () => {
    expect(readPositiveIntegerSearchParam('2', 1)).toBe(2)
    expect(readPositiveIntegerSearchParam(-1, 1)).toBe(1)
    expect(readPositiveIntegerSearchParam('abc', 1)).toBe(1)
  })

  it('should read enum search params', () => {
    const statuses = ['all', 'active', 'archived'] as const

    expect(readEnumSearchParam('active', statuses, 'all')).toBe('active')
    expect(readEnumSearchParam('paused', statuses, 'all')).toBe('all')
  })

  it('should read boolean search params', () => {
    expect(readBooleanSearchParam(true)).toBe(true)
    expect(readBooleanSearchParam('true')).toBe(true)
    expect(readBooleanSearchParam('false', true)).toBe(false)
    expect(readBooleanSearchParam('unknown', true)).toBe(true)
  })
})
