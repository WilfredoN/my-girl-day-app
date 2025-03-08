import { motion } from 'motion/react'
import { Tables } from '../../../types/supabase'
import { Status } from '../Status'

interface TimelineItemProps {
  status: Tables<'flower-status'>
  index: number
  newestSpecialStatus: Tables<'flower-status'> | undefined
  specialStatusRef: React.RefObject<HTMLDivElement | null>
  isNewest?: boolean
}

export const TimelineItem = ({
  status,
  index,
  newestSpecialStatus,
  specialStatusRef,
  isNewest = false,
}: TimelineItemProps) => {
  return (
    <motion.div
      className="relative flex w-full items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
    >
      {index % 2 === 0 ? (
        <>
          <div className="flex w-1/2 justify-end pr-6">
            <Status
              status={status}
              position="left"
              ref={status.id === newestSpecialStatus?.id ? specialStatusRef : null}
              isNewest={isNewest}
            />
          </div>
          <TimelineDot />
          <div className="w-1/2 pl-6"></div>
        </>
      ) : (
        <>
          <div className="w-1/2 pr-6"></div>
          <TimelineDot />
          <div className="flex w-1/2 justify-start pl-6">
            <Status
              status={status}
              position="right"
              ref={status.id === newestSpecialStatus?.id ? specialStatusRef : null}
              isNewest={isNewest}
            />
          </div>
        </>
      )}
    </motion.div>
  )
}

const TimelineDot = () => (
  <div className="absolute top-1/2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-gray-400"></div>
)
