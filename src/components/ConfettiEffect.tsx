import Confetti from 'react-confetti'
import { useConfettiConfig } from '../hooks/useConfettiConfig'

interface ConfettiEffectProps {
  showConfetti: boolean
  specialStatusRef: React.RefObject<HTMLDivElement | null>
  hasSpecialStatus: boolean
}

export const ConfettiEffect = ({
  showConfetti,
  specialStatusRef,
  hasSpecialStatus,
}: ConfettiEffectProps) => {
  const confettiConfig = useConfettiConfig(specialStatusRef, hasSpecialStatus)

  if (!showConfetti) return null

  return (
    <Confetti
      width={confettiConfig.width}
      height={confettiConfig.height}
      numberOfPieces={200}
      recycle={true}
      confettiSource={{
        x: confettiConfig.x,
        y: confettiConfig.y + 25,
        w: 0,
        h: 0,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        pointerEvents: 'none',
      }}
    />
  )
}
