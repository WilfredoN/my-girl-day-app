import { useCallback, useEffect, useState } from 'react'
import { useSupabase } from '../components/useSupabase'
import { Tables } from '../types/supabase'

export const useStatuses = () => {
  const [statuses, setStatuses] = useState<Tables<'flower-status'>[]>([])
  const supabase = useSupabase()

  const getStatuses = useCallback(async () => {
    const { data, error } = await supabase().from('flower-status').select()
    if (error) {
      console.error(error)
      return
    }
    setStatuses((data as Tables<'flower-status'>[]) ?? [])
  }, [supabase])

  useEffect(() => {
    getStatuses()

    const channel = supabase()
      .channel('public:flower-status')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'flower-status' },
        (payload) => {
          console.log('Change received!', payload)
          getStatuses()
        },
      )
      .subscribe()

    return () => {
      supabase().removeChannel(channel)
    }
  }, [getStatuses, supabase])

  return { statuses, getStatuses }
}
