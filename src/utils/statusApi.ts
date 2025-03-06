import supabase from '../components/supabaseClient'
import { TablesInsert } from '../types/supabase'

export const addStatus = async (statusName: string) => {
  const newStatus: TablesInsert<'flower-status'> = {
    status: statusName,
    created_at: new Date().toISOString(),
  }

  const { error } = await supabase().from('flower-status').insert(newStatus)
  if (error) {
    console.error(error)
    return
  }
}

export const clearStatuses = async () => {
  const { data, error } = await supabase().from('flower-status').select('id')
  if (error) {
    console.error(error)
    return
  }
  const ids = data?.map((status) => status.id)
  if (!ids) return

  const { error: deleteError } = await supabase().from('flower-status').delete().in('id', ids)
  if (deleteError) {
    console.error(deleteError)
    return
  }
}
