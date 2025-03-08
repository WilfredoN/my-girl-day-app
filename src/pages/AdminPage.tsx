import { useState } from 'react'
import { CustomStatusButton } from '../components/buttons/CustomStatusButton'
import { StatusList } from '../components/StatusList'
import { Tables } from '../types/supabase'
import { clearStatuses, sendStatus } from '../utils/statusApi'

const statusList = [
  { id: 0, name: 'Курьер ожидает у ворот' },
  { id: 3, name: 'Заказ принят' },
  { id: 2, name: 'Букет готов' },
  { id: 1, name: 'Курьер в пути' },
]

interface AdminPageProps {
  statuses: Tables<'flower-status'>[]
}

export const AdminPage = ({ statuses }: AdminPageProps) => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [isSpecial, setIsSpecial] = useState(false)

  const handleStatusSelect = (statusName: string) => {
    setSelectedStatus(statusName)
  }

  const handleConfirm = () => {
    if (selectedStatus) {
      sendStatus(selectedStatus, isSpecial)
      setSelectedStatus(null)
      setIsSpecial(false)
    }
  }

  return (
    <div className="my-6 flex flex-col items-center justify-center gap-8 sm:px-0 md:p-4">
      <div className="mb-8 h-fit rounded-lg bg-white shadow-md sm:p-0 md:p-4">
        <h2 className="mb-4 text-xl font-bold">Update Status</h2>
        <div className="flex h-full flex-col flex-wrap gap-4">
          {statusList
            .slice()
            .reverse()
            .map((status) => (
              <button
                key={status.id}
                onClick={() => handleStatusSelect(status.name)}
                className={`rounded px-4 py-2 font-bold text-white ${
                  selectedStatus === status.name
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-500 hover:bg-gray-600'
                }`}
              >
                {status.name}
              </button>
            ))}
        </div>

        <CustomStatusButton onSelect={handleStatusSelect} />

        {selectedStatus && (
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="specialToggle" className="font-medium">
                Special status:
              </label>
              <button
                id="specialToggle"
                onClick={() => setIsSpecial(!isSpecial)}
                className={`h-10 w-20 rounded-full px-3 py-1 font-bold text-white ${
                  isSpecial ? 'bg-[#35c235]' : 'bg-gray-400'
                }`}
              >
                {isSpecial ? 'ON' : 'OFF'}
              </button>
              <span className="text-sm text-gray-500">
                {isSpecial ? 'Status will appear green' : 'Status will appear red'}
              </span>
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleConfirm}
                className="rounded bg-blue-600 px-6 py-2 font-bold text-white hover:bg-blue-700"
              >
                Confirm & Send
              </button>

              <button
                onClick={() => {
                  setSelectedStatus(null)
                  setIsSpecial(false)
                }}
                className="rounded bg-gray-400 px-6 py-2 font-bold text-white hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <h2 className="mb-4 text-xl font-bold">Status History</h2>
      <StatusList statuses={statuses} />
      <button
        onClick={() => clearStatuses()}
        className="rounded bg-[#da292b] px-4 py-2 font-bold text-white hover:bg-[#b52023]"
      >
        Clear
      </button>
    </div>
  )
}
