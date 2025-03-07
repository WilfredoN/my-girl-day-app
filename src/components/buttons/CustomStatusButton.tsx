import { addStatus } from '../../utils/statusApi'

export const CustomStatusButton = () => {
  return (
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
  )
}
