import { AnimatePresence } from 'motion/react'
import { Tables } from '../../../types/supabase'
import { TimelineItem } from './TimelineItem'

interface TimelineProps {
  sortedStatuses: Tables<'flower-status'>[]
  newestSpecialStatus: Tables<'flower-status'> | undefined
  specialStatusRef: React.RefObject<HTMLDivElement | null>
}

export const Timeline = ({
  sortedStatuses,
  newestSpecialStatus,
  specialStatusRef,
}: TimelineProps) => {
  const newestStatusId = sortedStatuses.length > 0 ? sortedStatuses[0].id : null

  return (
    <div className="relative w-full">
      {sortedStatuses.length > 1 && (
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2 bg-gray-300"></div>
      )}

      <AnimatePresence>
        <div className="flex w-full flex-col gap-10">
          {sortedStatuses.map((status, index) => (
            <TimelineItem
              key={status.id}
              status={status}
              index={index}
              newestSpecialStatus={newestSpecialStatus}
              specialStatusRef={specialStatusRef}
              isNewest={status.id === newestStatusId}
            />
          ))}
        </div>
      </AnimatePresence>
    </div>
  )
}
