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
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">Admin Panel</h1>

      <div className="mb-8 rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-4 text-xl font-bold">Update Status</h2>
        <div className="flex flex-col flex-wrap gap-4">
          {statusList.map((status) => (
            <button
              key={status.id}
              onClick={() => addStatus(status.name)}
              className="rounded bg-[#da292b] px-4 py-2 font-bold text-white hover:bg-[#b52023]"
            >
              {status.name}
            </button>
          ))}
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
