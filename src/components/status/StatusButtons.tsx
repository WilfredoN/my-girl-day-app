export const StatusButtons = ({
  statusList,
  selectedStatus,
  isSpecial,
  onStatusSelect,
}: {
  statusList: { id: number; name: string }[]
  selectedStatus: string | null
  isSpecial: boolean
  onStatusSelect: (name: string) => void
}) => (
  <div className="mb-4 flex h-full flex-col flex-wrap gap-4">
    {statusList
      .slice()
      .reverse()
      .map((status) => (
        <button
          key={status.id}
          onClick={() => onStatusSelect(status.name)}
          className={`rounded px-4 py-2 font-bold text-white transition-colors ${
            selectedStatus === status.name
              ? 'bg-blue-600 hover:bg-blue-700'
              : isSpecial
                ? 'bg-[#35c235] hover:bg-green-600'
                : 'bg-[#da292b] hover:bg-red-700'
          }`}
        >
          {status.name}
        </button>
      ))}
  </div>
)
