import React from 'react'
import { SupabaseContext, SupabaseContextType } from '../types/supabaseContext'
import supabase from '../utils/supabaseClient'

export const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const value: SupabaseContextType = { supabase }

  return <SupabaseContext.Provider value={value}>{children}</SupabaseContext.Provider>
}
