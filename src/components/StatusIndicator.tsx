export const StatusIndicator = () => (
  <div className="relative h-6 w-6 flex-shrink-0">
    <input
      type="checkbox"
      className="absolute inset-0 h-6 w-6 cursor-default appearance-none rounded-full border-none bg-red-600"
      checked
      readOnly
    />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full ring-2 ring-red-600" />
  </div>
)
