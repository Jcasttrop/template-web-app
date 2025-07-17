import { SupabaseClient } from '@/utils/supabase/server'

export default async function Page() {
    const supabase = await SupabaseClient()

    try {
        const { data, error } = await supabase.from('metrics').select('*').limit(10)
        if (error) {
            throw error
        } else {
            console.log('Metrics data:', data)
        }
        return (
            <div>
                {data?.map((m) => (
                    <div key={m.id}>
                        <h3>{m.name}</h3>
                        <p>Value: {m.value}</p>
                        <p>Timestamp: {new Date(m.timestamp).toLocaleString()}</p>
                    </div>
                ))}
                
            </div>
        )
    } catch (error) {
        console.error('Error fetching metrics:', error)
        return <div>Error fetching metrics</div>
    }
}
