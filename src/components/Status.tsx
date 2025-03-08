import { forwardRef } from 'react'
import { Tables } from '../types/supabase'
import { StatusIndicator } from './StatusIndicator'

interface StatusProps {
  status: Tables<'flower-status'>
  position: 'left' | 'right'
}

export const Status = forwardRef<HTMLDivElement, StatusProps>(({ status, position }, ref) => {
  const isLeft = position === 'left'
  const statusColor = status.is_special ? 'text-[#35c235]' : 'text-[#da292b]'

  return (
    <div
      className={`flex w-full max-w-[90%] items-center gap-4 rounded-lg bg-white p-4 shadow-md`}
      ref={ref}
    >
      {isLeft ? (
        <>
          <div className="flex flex-col-reverse items-end gap-2 text-right">
            <span className={`font-bold ${statusColor}`}>{status.status}</span>
            <span className="text-right text-sm text-gray-500">
              {status.created_at && new Date(status.created_at).toLocaleString()}
            </span>
          </div>
          <StatusIndicator />
        </>
      ) : (
        <>
          <StatusIndicator />
          <div className="flex flex-col-reverse items-start gap-2">
            <span className={`font-bold ${statusColor}`}>{status.status}</span>
            <span className="text-left text-sm text-gray-500">
              {status.created_at && new Date(status.created_at).toLocaleString()}
            </span>
          </div>
        </>
      )}
    </div>
  )
})
