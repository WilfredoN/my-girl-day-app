const SEARCH_KEY = 'hasSearched'

export const hasSearchCompleted = (): boolean => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem(SEARCH_KEY) === 'true'
}

export const setSearchCompleted = (completed: boolean): void => {
  if (typeof window === 'undefined') return

  if (completed) {
    localStorage.setItem(SEARCH_KEY, 'true')
  } else {
    localStorage.removeItem(SEARCH_KEY)
  }
}

export const clearSearchState = (): void => {
  if (typeof window === 'undefined') return
  localStorage.removeItem(SEARCH_KEY)
}
