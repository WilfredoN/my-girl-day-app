export const ConfirmationPanel = ({
  onConfirm,
  onCancel,
}: {
  selectedStatus: string
  onConfirm: () => void
  onCancel: () => void
}) => (
  <div className="mt-6 flex gap-4">
    <button
      onClick={onConfirm}
      className="rounded bg-blue-600 px-6 py-2 font-bold text-white hover:bg-blue-700"
    >
      Confirm & Send
    </button>

    <button
      onClick={onCancel}
      className="rounded bg-gray-400 px-6 py-2 font-bold text-white hover:bg-gray-500"
    >
      Cancel
    </button>
  </div>
)
