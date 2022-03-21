import { writable } from "svelte/store";
import supabase from "$lib/db.js";

export const gregors = writable([])

const makeReq = async () => {
    const req = await supabase
    .from('gregors')
    .select(`
        id,
        created_at,
        name,
        universe
    `)

    gregors.set(req.data)
}
makeReq()