import { CustomStatusButton } from '../components/buttons/CustomStatusButton'
import { DefinedStatusButton } from '../components/buttons/DefinedStatusButton'
import { StatusList } from '../components/StatusList'
import { Tables } from '../types/supabase'
import { clearStatuses } from '../utils/statusApi'

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
  return (
    <div className="my-6 flex flex-col items-center justify-center gap-8 sm:px-0 md:p-4">
      <div className="mb-8 h-fit rounded-lg bg-white shadow-md sm:p-0 md:p-4">
        <h2 className="mb-4 text-xl font-bold">Update Status</h2>
        <div className="flex h-full flex-col flex-wrap gap-4">
          {statusList
            .slice()
            .reverse()
            .map((status) => (
              <DefinedStatusButton key={status.id} id={status.id} name={status.name} />
            ))}
        </div>
        <CustomStatusButton />
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
