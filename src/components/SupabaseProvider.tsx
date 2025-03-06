import React from 'react'
import supabase from '../components/supabaseClient'
import { SupabaseContext, SupabaseContextType } from '../types/supabaseContext'

export const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const value: SupabaseContextType = { supabase }

  return <SupabaseContext.Provider value={value}>{children}</SupabaseContext.Provider>
}
