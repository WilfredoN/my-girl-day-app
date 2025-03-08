import { useEffect, useRef, useState } from 'react'
import { Tables } from '../../types/supabase'
import { ConfettiEffect } from '../ConfettiEffect'
import { EmptyState } from '../EmptyState'
import { Timeline } from './timeline/Timeline'

interface StatusListProps {
  statuses: Tables<'flower-status'>[]
}

export const StatusList = ({ statuses }: StatusListProps) => {
  const [showConfetti, setShowConfetti] = useState(false)
  const specialStatusRef = useRef<HTMLDivElement>(null)

  const sortedStatuses = statuses.slice().reverse()

  const newestSpecialStatus = sortedStatuses.find((status) => status.is_special === true)
  const hasSpecialStatus = !!newestSpecialStatus

  useEffect(() => {
    setShowConfetti(hasSpecialStatus)
  }, [hasSpecialStatus])

  return (
    <div className="relative my-6 flex w-full max-w-2xl flex-col items-center px-4">
      <ConfettiEffect
        showConfetti={showConfetti}
        specialStatusRef={specialStatusRef}
        hasSpecialStatus={hasSpecialStatus}
      />

      {sortedStatuses.length > 0 ? (
        <Timeline
          sortedStatuses={sortedStatuses}
          newestSpecialStatus={newestSpecialStatus}
          specialStatusRef={specialStatusRef}
        />
      ) : (
        <EmptyState />
      )}
    </div>
  )
}
