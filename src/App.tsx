import { useState } from 'react'
import './App.css'
import { ContactCenter } from './components/ContactCenter'
import { NovaPoshtaLogo } from './components/NovaPoshtaLogo'
import { useStatuses } from './hooks/useStatuses'
import { AdminPage } from './pages/AdminPage'
import { MainPage } from './pages/MainPage'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'admin'>('home')
  const [isFound, setIsFound] = useState<boolean>(false)
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
      <header className="relative mb-8 flex h-16 w-full flex-row items-center justify-between">
        <NovaPoshtaLogo onClick={() => setCurrentPage('admin')} />
        <ContactCenter />
      </header>
      <MainPage isFound={isFound} setIsFound={setIsFound} statuses={statuses} />
    </>
  )
}

export default App
