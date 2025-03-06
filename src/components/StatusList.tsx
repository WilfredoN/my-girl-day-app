import { Tables } from '../types/supabase'

interface StatusListProps {
  statuses: Tables<'flower-status'>[]
}

export const StatusList = ({ statuses }: StatusListProps) => {
  return (
    <div className="my-4 flex flex-col items-center gap-6">
      {statuses
        .slice()
        .reverse()
        .map((status) => (
          <div key={status.id} className="max-w-md rounded-lg bg-white p-4 shadow-md">
            <div className="flex justify-between gap-4">
              <span className="font-bold text-[#da292b]">{status.status}</span>
              <span className="text-sm text-gray-500">
                {status.created_at && new Date(status.created_at).toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      {statuses.length === 0 && <p className="text-gray-500">No status updates yet</p>}
    </div>
  )
}
