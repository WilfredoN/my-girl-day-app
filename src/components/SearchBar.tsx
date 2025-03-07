import { motion } from 'motion/react'
import { useState } from 'react'
import { useSearchState } from '../hooks/useSearchState'
import { useTrackingValidation } from '../hooks/useTrackingValidation'
import { interpolateColor } from '../utils/interpolateColor'

interface SearchBarProps {
  isFound: boolean
  setIsFound: (isFound: boolean) => void
}

const ERROR_COLOR = '#da292b'
const SUCCESS_COLOR = '#35c235'

export const SearchBar = ({ isFound, setIsFound }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const { inputValue, isCorrect, matchProgress, handleInputChange } = useTrackingValidation()
  const { hasSearched, completeSearch } = useSearchState(isFound, setIsFound)

  const currentColor = interpolateColor(ERROR_COLOR, SUCCESS_COLOR, matchProgress)

  if (hasSearched) {
    return null
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-12">
      {!isFound && (
        <motion.input
          value={inputValue}
          className={`h-12 w-fit min-w-4/12 rounded-full bg-white px-4 outline-2 transition-all duration-100 focus:border-0 focus:ring-2`}
          style={
            {
              outlineColor: currentColor,
              '--tw-ring-color': currentColor,
            } as React.CSSProperties
          }
          whileHover={{ scale: 1.05 }}
          placeholder={isFocused ? 'Кокой же номер.. тык тык...' : 'Отследите вашу посылку...'}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      )}
      {isCorrect && (
        <motion.div
          className="cursor-pointer rounded-full p-4 text-center text-[#35c235]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          dragElastic={0.5}
          whileHover={{
            scale: 1.2,
            rotate: 24,
            backgroundColor: '#35c235',
            color: '#ffffff',
          }}
          whileTap={{
            scale: 1.0,
            rotate: -36,
          }}
          onClick={completeSearch}
        >
          <button className="cursor-pointer">Найти посылку</button>
        </motion.div>
      )}
    </div>
  )
}
