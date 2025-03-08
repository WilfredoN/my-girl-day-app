import { useCallback, useEffect, useState } from 'react'

export const useConfettiConfig = (
  specialStatusRef: React.RefObject<HTMLDivElement | null>,
  hasSpecialStatus: boolean,
) => {
  const [confettiConfig, setConfettiConfig] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    x: window.innerWidth / 2,
    y: 0,
  })

  const updateConfettiPosition = useCallback(() => {
    setConfettiConfig((prev) => ({
      ...prev,
      width: window.innerWidth,
      height: window.innerHeight,
    }))

    if (specialStatusRef.current && hasSpecialStatus) {
      const rect = specialStatusRef.current.getBoundingClientRect()
      setConfettiConfig((prev) => ({
        ...prev,
        x: rect.left + rect.width / 2,
        y: rect.top,
      }))
    }
  }, [specialStatusRef, hasSpecialStatus])

  useEffect(() => {
    updateConfettiPosition()

    window.addEventListener('resize', updateConfettiPosition)
    return () => window.removeEventListener('resize', updateConfettiPosition)
  }, [updateConfettiPosition])

  return confettiConfig
}
