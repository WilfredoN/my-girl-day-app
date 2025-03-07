import { useEffect, useRef, useState } from 'react'
import Confetti from 'react-confetti'
import { Tables } from '../types/supabase'

interface StatusListProps {
  statuses: Tables<'flower-status'>[]
}

const awaitingCourierStatus = 'Курьер ожидает у ворот'

export const StatusList = ({ statuses }: StatusListProps) => {
  const [showConfetti, setShowConfetti] = useState(false)
  const [confettiConfig, setConfettiConfig] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    x: window.innerWidth / 2,
    y: 0,
  })
  const courierMessageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const hasAwaitingCourier = statuses.some((status) => status.status === awaitingCourierStatus)
    setShowConfetti(hasAwaitingCourier)

    if (hasAwaitingCourier && courierMessageRef.current) {
      const rect = courierMessageRef.current.getBoundingClientRect()
      setConfettiConfig({
        width: window.innerWidth,
        height: window.innerHeight,
        x: rect.left + rect.width / 2,
        y: rect.top,
      })
    }

    const handleResize = () => {
      setConfettiConfig((prev) => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      }))

      if (courierMessageRef.current) {
        const rect = courierMessageRef.current.getBoundingClientRect()
        setConfettiConfig((prev) => ({
          ...prev,
          x: rect.left + rect.width / 2,
          y: rect.top,
        }))
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [statuses])

  return (
    <div className="my-4 flex w-full flex-col items-center gap-6 md:max-w-10/12 xl:max-w-3/12">
      {showConfetti && (
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
      )}

      {statuses
        .slice()
        .reverse()
        .map((status) => (
          <div
            key={status.id}
            className="w-full rounded-lg bg-white p-4 shadow-md"
            ref={status.status === awaitingCourierStatus ? courierMessageRef : null}
          >
            <div className="flex justify-between gap-4">
              <span
                className={`font-bold ${status.status === awaitingCourierStatus ? 'text-[#35c235]' : 'text-[#da292b]'}`}
              >
                {status.status}
              </span>
              <span className="text-sm text-gray-500">
                {status.created_at && new Date(status.created_at).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      {statuses.length === 0 && <p className="text-gray-500">Оновлень нема...</p>}
    </div>
  )
}
