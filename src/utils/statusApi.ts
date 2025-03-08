import supabase from './supabaseClient'

export const sendStatus = async (status: string, isSpecial: boolean = false) => {
  try {
    const { data, error } = await supabase()
      .from('flower-status')
      .insert([
        {
          status,
          is_special: isSpecial,
          created_at: new Date().toISOString(),
        },
      ])

    if (error) throw error

    return data
  } catch (error) {
    console.error('Error sending status:', error)
  }
}

export const clearStatuses = async () => {
  try {
    const { error } = await supabase().from('flower-status').delete().neq('id', 0)

    if (error) throw error

    return true
  } catch (error) {
    console.error('Error clearing statuses:', error)
  }
}
