import { useCallback, useState } from 'react'
import { calculateStringMatchProgress } from '../utils/interpolateColor'

export const TARGET_TRACKING_NUMBER = '080806'

export const useTrackingValidation = () => {
  const [inputValue, setInputValue] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const [matchProgress, setMatchProgress] = useState(0)

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    if (value === TARGET_TRACKING_NUMBER) {
      setIsCorrect(true)
      setMatchProgress(1)
    } else {
      setIsCorrect(false)
      const progress = calculateStringMatchProgress(value, TARGET_TRACKING_NUMBER)
      setMatchProgress(progress)
    }
  }, [])

  return {
    inputValue,
    isCorrect,
    matchProgress,
    handleInputChange,
  }
}
