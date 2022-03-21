import supabase from "$lib/db"

export async function get({params}) {
    const req = await supabase
    .from('gregors')
    .select(`
        id,
        name,
        universe
    `)

    return {
        status: 200,
        body: req.data
    }
}