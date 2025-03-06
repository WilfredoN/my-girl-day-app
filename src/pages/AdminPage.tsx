import { StatusList } from '../components/StatusList'
import { Tables } from '../types/supabase'
import { addStatus, clearStatuses } from '../utils/statusApi'

const statusList = [
  { id: 1, name: 'Заказ принят' },
  { id: 2, name: 'Букет готов' },
  { id: 3, name: 'Курьер в пути' },
]
interface AdminPageProps {
  statuses: Tables<'flower-status'>[]
}
export const AdminPage = ({ statuses }: AdminPageProps) => {
  return (
    <div className="my-6 flex flex-col items-center justify-center gap-8 sm:px-0 md:p-4">
      <div className="mb-8 h-fit rounded-lg bg-white shadow-md sm:p-0 md:p-4">
        <h2 className="mb-4 text-xl font-bold">Update Status</h2>
        <div className="flex flex-col flex-wrap gap-4">
          {statusList.map((status) => (
            <button
              key={status.id}
              onClick={() => addStatus(status.name)}
              className="rounded bg-[#da292b] px-4 py-2 text-center font-bold text-white hover:bg-[#b52023]"
            >
              {status.name}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter custom status"
            className="mr-2 mb-4 rounded border px-4 py-2"
            id="customStatusInput"
          />
          <button
            onClick={() => {
              const input = document.getElementById('customStatusInput') as HTMLInputElement
              if (input && input.value.trim()) {
                addStatus(input.value.trim())
                input.value = ''
              }
            }}
            className="rounded bg-[#da292b] px-4 py-2 font-bold text-white hover:bg-[#b52023]"
          >
            Add Custom Status
          </button>
        </div>
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
