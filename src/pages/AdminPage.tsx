import { useState } from 'react'
import { CustomStatusButton } from '../components/buttons/CustomStatusButton'
import { ConfirmationPanel } from '../components/ConfirmationPanel'
import { StatusButtons } from '../components/status/StatusButtons'
import { StatusList } from '../components/status/StatusList'
import { StatusToggle } from '../components/status/StatusToggle'
import { Tables } from '../types/supabase'
import { clearStatuses, sendStatus } from '../utils/statusApi'

const statusList = [
  { id: 1, name: 'Заказ принят' },
  { id: 2, name: 'Букет готов' },
  { id: 3, name: 'Курьер в пути' },
  { id: 4, name: 'Курьер ожидает у ворот' },
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
    }
  }

  const handleCancel = () => {
    setSelectedStatus(null)
  }

  return (
    <div className="my-6 flex flex-col items-center justify-center gap-8 px-4 sm:px-6 md:p-4">
      <div className="mb-8 w-full max-w-lg rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-bold">Update Status</h2>

        <StatusToggle isSpecial={isSpecial} setIsSpecial={setIsSpecial} />

        <StatusButtons
          statusList={statusList}
          selectedStatus={selectedStatus}
          isSpecial={isSpecial}
          onStatusSelect={handleStatusSelect}
        />

        <CustomStatusButton onSelect={handleStatusSelect} />

        {selectedStatus && (
          <ConfirmationPanel
            selectedStatus={selectedStatus}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
      </div>

      <div className="w-full max-w-lg">
        <h2 className="mb-4 text-xl font-bold">Status History</h2>
        <StatusList statuses={statuses} />
        <button
          onClick={clearStatuses}
          className="mt-4 rounded bg-[#da292b] px-4 py-2 font-bold text-white hover:bg-[#b52023]"
        >
          Clear
        </button>
      </div>
    </div>
  )
}
