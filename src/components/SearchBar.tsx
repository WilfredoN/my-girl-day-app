import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

interface SearchBarProps {
  isFound: boolean
  setIsFound: (isFound: boolean) => void
}

export const SearchBar = ({ isFound, setIsFound }: SearchBarProps) => {
  const [isCorrect, setIsCorrect] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  useEffect(() => {
    const storedSearchState = localStorage.getItem('hasSearched')
    if (storedSearchState === 'true') {
      setHasSearched(true)
      setIsFound(true)
    }
  }, [setIsFound])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '080806') {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  const handleFindPackage = () => {
    setIsFound(true)
    setIsCorrect(false)
    setHasSearched(true)
    localStorage.setItem('hasSearched', 'true')
  }

  if (hasSearched) {
    return null
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-12">
      {!isFound && (
        <input
          className={`h-12 w-4/12 rounded-full bg-white px-4 outline-2 transition-all duration-100 focus:border-0 focus:ring-2 ${
            isCorrect
              ? 'outline-[#35c235] focus:ring-[#35c235]'
              : 'outline-[#da292c95] focus:ring-[#da292b]'
          }`}
          placeholder="Отследите вашу посылку..."
          onChange={handleSearch}
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
            scale: 1.5,
            rotate: 24,
            backgroundColor: '#35c235',
            color: '#ffffff',
          }}
          whileTap={{
            scale: 1.0,
            rotate: -36,
          }}
          onClick={handleFindPackage}
        >
          <button className="cursor-pointer">Найти посылку</button>
        </motion.div>
      )}
    </div>
  )
}
