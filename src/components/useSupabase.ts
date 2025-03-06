import { useContext } from 'react'
import { SupabaseContext } from '../types/supabaseContext'

export const useSupabase = () => {
  const context = useContext(SupabaseContext)
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }
  return context.supabase
}
