import { writable } from "svelte/store";

export const login = writable({})

login.set(
    {
        login: "admin_dotg",
        password: "Zielon@herbata123",
        isLogged: false
    }
)