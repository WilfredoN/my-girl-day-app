import { FlyingBox } from '../components/FlyingBox'
import { SearchBar } from '../components/SearchBar'
import { StatusList } from '../components/StatusList'
import { Tables } from '../types/supabase'

interface MainPageProps {
  isFound: boolean
  setIsFound: (isFound: boolean) => void
  statuses: Tables<'flower-status'>[]
}

export const MainPage = ({ isFound, setIsFound, statuses }: MainPageProps) => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-screen w-screen overflow-hidden">
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
          </>
        )}
      </div>
      <main className="relative flex flex-col items-center justify-center">
        <SearchBar isFound={isFound} setIsFound={setIsFound} />
        {isFound && <StatusList statuses={statuses} />}
      </main>
    </>
  )
}
