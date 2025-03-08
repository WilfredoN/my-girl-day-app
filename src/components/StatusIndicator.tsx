interface StatusIndicatorProps {
  isNewest?: boolean
}

export const StatusIndicator = ({ isNewest = false }: StatusIndicatorProps) => (
  <div className="relative h-6 w-6 flex-shrink-0">
    <input
      type="checkbox"
      className={`absolute inset-0 h-6 w-6 cursor-default appearance-none rounded-full border-none bg-red-600`}
      checked
      readOnly
    />
    {/* <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-100 duration-75"></span> */}

    {isNewest && (
      <div className="pointer-events-none absolute inset-0 flex animate-ping items-center justify-center rounded-full ring-2 ring-red-600 duration-1000" />
    )}
  </div>
)
