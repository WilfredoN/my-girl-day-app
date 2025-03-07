import { useCallback, useEffect, useState } from 'react'
import {
  clearSearchState,
  hasSearchCompleted,
  setSearchCompleted,
} from '../types/localStorageAdapter'

export const useSearchState = (
  initialIsFound: boolean,
  setIsFoundCallback: (isFound: boolean) => void,
) => {
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    const searchCompleted = hasSearchCompleted()
    setHasSearched(searchCompleted)

    if (searchCompleted && !initialIsFound) {
      setIsFoundCallback(true)
    }
  }, [setIsFoundCallback, initialIsFound])

  const handleKeyboardReset = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'c' && !event.ctrlKey && !event.metaKey && !event.altKey) {
        clearSearchState()
        setHasSearched(false)
        setIsFoundCallback(false)
        console.log('Search state cleared')
      }
    },
    [setIsFoundCallback],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboardReset)
    return () => {
      window.removeEventListener('keydown', handleKeyboardReset)
    }
  }, [handleKeyboardReset])

  const completeSearch = useCallback(() => {
    setIsFoundCallback(true)
    setHasSearched(true)
    setSearchCompleted(true)
  }, [setIsFoundCallback])

  return {
    hasSearched,
    completeSearch,
  }
}
