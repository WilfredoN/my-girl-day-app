import { createContext } from 'react'
import supabase from '../utils/supabaseClient'

export interface SupabaseContextType {
  supabase: () => ReturnType<typeof supabase>
}

export const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined)
