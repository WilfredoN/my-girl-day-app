import { addStatus } from '../../utils/statusApi'

interface StatusProps {
  id: number
  name: string
}

export const DefinedStatusButton = ({ id, name }: StatusProps) => {
  return (
    <button
      key={id}
      onClick={() => addStatus(name)}
      className={`cursor-pointer rounded px-4 py-2 text-center font-bold text-white ${
        id === 0 ? 'bg-[#35c235] hover:bg-[#3e7e3e]' : 'bg-[#da292b] hover:bg-[#b52023]'
      }`}
    >
      {name}
    </button>
  )
}
