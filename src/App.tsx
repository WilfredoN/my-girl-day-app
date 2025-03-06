import './App.css'
import { FlyingBox } from './components/FlyingBox'
import { NovaPoshtaLogo } from './components/NovaPoshtaLogo'
import { SearchBar } from './components/SearchBar'

function App() {
  return (
    <>
      <div className="absolute h-screen w-screen overflow-hidden">
        <FlyingBox initialX={window.innerWidth / 2} initialY={window.innerHeight / 2} speed={2.5} />
        <FlyingBox initialX={window.innerWidth / 3} initialY={window.innerHeight / 3} speed={2.5} />
        <FlyingBox initialX={window.innerWidth / 4} initialY={window.innerHeight / 4} speed={2.5} />
        <FlyingBox initialX={window.innerWidth / 5} initialY={window.innerHeight / 5} speed={2.5} />
        <FlyingBox initialX={window.innerWidth / 8} initialY={window.innerHeight / 5} speed={2.5} />
      </div>
      <header className="relative z-10 mb-8 flex h-16 w-full flex-row items-center justify-between">
        <NovaPoshtaLogo />
        <div className="flex h-12 w-48 flex-col text-right">
          <h2>
            <b>+38-097-537-08-84</b>
          </h2>
          <h3>Контакт-центр</h3>
        </div>
      </header>
      <main className="relative z-10 flex items-center justify-center">
        <SearchBar />
      </main>
    </>
  )
}

export default App
