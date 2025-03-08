export const StatusToggle = ({
  isSpecial,
  setIsSpecial,
}: {
  isSpecial: boolean
  setIsSpecial: (value: boolean) => void
}) => (
  <div className="mb-6 flex items-center gap-2">
    <label htmlFor="specialToggle" className="font-medium">
      Special status:
    </label>
    <button
      id="specialToggle"
      onClick={() => setIsSpecial(!isSpecial)}
      className={`h-10 w-20 rounded-full px-3 py-1 font-bold text-white transition-colors ${
        isSpecial ? 'bg-[#35c235]' : 'bg-[#da292b]'
      }`}
    >
      {isSpecial ? 'ON' : 'OFF'}
    </button>
  </div>
)
