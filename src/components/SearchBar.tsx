import { motion } from 'motion/react'
import { useState } from 'react'
export const SearchBar = () => {
  const [isFound, setIsFound] = useState(false)
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '080806') {
      console.log('Посылка найдена!')
      setIsFound(true)
    } else {
      setIsFound(false)
    }
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-12">
      <input
        className={`h-12 w-4/12 rounded-full bg-white px-4 outline-2 transition-all duration-100 focus:border-0 focus:ring-2 ${
          isFound
            ? 'outline-[#35c235] focus:ring-[#35c235]'
            : 'outline-[#da292c95] focus:ring-[#da292b]'
        }`}
        placeholder="Отследите вашу посылку..."
        onChange={handleSearch}
      />
      {isFound && (
        <motion.div
          className="cursor-pointer rounded-full p-4 text-center text-[#35c235]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          drag
          whileHover={{
            scale: 1.5,
            rotate: 24,
            backgroundColor: '#35c235',
            color: '#ffffff',
          }}
          whileTap={{
            scale: 1.0,
            rotate: -24,
          }}
        >
          <button className="cursor-pointer">Найти посылку</button>
        </motion.div>
      )}
    </div>
  )
}
