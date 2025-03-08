import { useEffect, useState } from 'react'
import { FlyingBox } from '../components/FlyingBox'
import { SearchBar } from '../components/SearchBar'
import { StatusList } from '../components/status/StatusList'
import { Tables } from '../types/supabase'

interface MainPageProps {
  statuses: Tables<'flower-status'>[]
}

export const MainPage = ({ statuses }: MainPageProps) => {
  const [isFound, setIsFound] = useState<boolean>(false)
  useEffect(() => {
    console.log(isFound)
  }, [isFound])
  return (
    <>
      <div className="absolute inset-0 -z-[-1] h-screen w-screen overflow-hidden">
        {!isFound && (
          <>
            <FlyingBox
              initialX={window.innerWidth / 2}
              initialY={window.innerHeight / 2}
              speed={2.5}
            />
            <FlyingBox
              initialX={window.innerWidth / 3}
              initialY={window.innerHeight / 3}
              speed={2.5}
            />
            <FlyingBox
              initialX={window.innerWidth / 4}
              initialY={window.innerHeight / 4}
              speed={2.5}
            />
            <FlyingBox
              initialX={window.innerWidth / 5}
              initialY={window.innerHeight / 5}
              speed={2.5}
            />
            <FlyingBox
              initialX={window.innerWidth / 8}
              initialY={window.innerHeight / 5}
              speed={2.5}
            />
            <FlyingBox
              initialX={window.innerWidth / 8}
              initialY={window.innerHeight / 5}
              speed={2.5}
            />
          </>
        )}
      </div>
      <main className="relative z-10 flex flex-col items-center justify-center">
        <SearchBar isFound={isFound} setIsFound={setIsFound} />
        {isFound && <StatusList statuses={statuses} />}
      </main>
    </>
  )
}
