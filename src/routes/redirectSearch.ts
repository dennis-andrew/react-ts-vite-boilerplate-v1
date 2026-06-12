import { readTrimmedStringSearchParam } from './routerSearchUtils'

export interface RedirectSearch {
  redirect?: string
}

export const getSafeRedirect = (redirect: unknown): string | undefined => {
  const trimmedRedirect = readTrimmedStringSearchParam(redirect)

  if (!trimmedRedirect.startsWith('/') || trimmedRedirect.startsWith('//')) {
    return undefined
  }

  return trimmedRedirect
}

export const validateRedirectSearch = (
  search: Record<string, unknown>,
): RedirectSearch => ({
  redirect: getSafeRedirect(search.redirect),
})
