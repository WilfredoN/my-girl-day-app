import { useState } from 'react'

interface CustomStatusButtonProps {
  onSelect: (status: string) => void
}

export const CustomStatusButton = ({ onSelect }: CustomStatusButtonProps) => {
  const [inputValue, setInputValue] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onSelect(inputValue.trim())
      setInputValue('')
      setIsExpanded(false)
    }
  }

  return (
    <div className="mt-4">
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600"
        >
          Custom status
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="rounded border border-gray-300 px-2 py-1"
            placeholder="Enter custom status"
            autoFocus
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="rounded bg-blue-600 px-3 py-1 font-bold text-white hover:bg-blue-700"
            >
              Select
            </button>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="rounded bg-gray-400 px-3 py-1 font-bold text-white hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
