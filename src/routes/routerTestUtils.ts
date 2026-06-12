import { isNotFound, isRedirect } from '@tanstack/react-router'

export interface RedirectError {
  options: Record<string, unknown>
}

export const expectRedirect = (callback: () => void): RedirectError => {
  try {
    callback()
  } catch (error) {
    expect(isRedirect(error)).toBe(true)
    return error as RedirectError
  }

  throw new Error('Expected route guard to throw a redirect')
}

export const expectNotFound = (callback: () => void): void => {
  try {
    callback()
  } catch (error) {
    expect(isNotFound(error)).toBe(true)
    return
  }

  throw new Error('Expected route loader or guard to throw notFound')
}
