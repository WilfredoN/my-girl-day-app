import { useState } from 'react'
import './App.css'
import { ContactCenter } from './components/ContactCenter'
import { NovaPoshtaLogo } from './components/NovaPoshtaLogo'
import { useStatuses } from './hooks/useStatuses'
import { AdminPage } from './pages/AdminPage'
import { MainPage } from './pages/MainPage'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'admin'>('home')
  const [counter, setCounter] = useState(0)
  const { statuses } = useStatuses()

  if (currentPage === 'admin') {
    return (
      <div>
        <button
          onClick={() => setCurrentPage('home')}
          className="absolute top-4 left-4 rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
        >
          ← Back to Home
        </button>
        <AdminPage statuses={statuses} />
      </div>
    )
  }

  return (
    <>
      <header className="relative z-10 mb-8 flex min-h-16 w-full flex-wrap items-center justify-between p-0 md:flex-row md:p-4">
        <NovaPoshtaLogo
          onClick={() => {
            setCounter(counter + 1)
            if (counter >= 5) {
              setCurrentPage('admin')
              setCounter(0)
            }
          }}
        />
        <ContactCenter />
      </header>
      <MainPage statuses={statuses} />
    </>
  )
}

export default App
