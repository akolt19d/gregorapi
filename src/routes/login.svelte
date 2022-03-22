<script>
    import { goto } from '$app/navigation';
    import { fade } from 'svelte/transition'
    import { login } from '../stores/login'
    let admin = $login;
    let error = ''

    const handleKeypress = (e) => {
        if(e.keyCode === 13)
            verifyUser()
    }

    const verifyUser = () => {
        const userLogin = document.querySelector('#login')
        const userPassword = document.querySelector('#password')

        if(userLogin.value == admin['login'] && userPassword.value == admin['password'])
        {
            admin['isLogged'] = true
            login.update(() => {
                return admin;
            })
            //console.log($login)
            //window.location.href ='/admin/'
            goto('/admin')
        }
        else
        {
            error = 'Login lub hasło są błędne. Spróbuj ponownie.'
        }
    }
</script>

<div transition:fade class="flex justify-center items-center h-screen flex-col">
    <section class="h-80 w-80 flex justify-center items-center flex-col border rounded-xl shadow-xl">
        <h2 class="text-xl">Zaloguj się</h2>
        <input on:keypress={handleKeypress} class="my-3 px-3 py-1 border border-slate-400 rounded" type="text" placeholder="Nazwa użytkownika" id="login">
        <input on:keypress={handleKeypress} class="my-3 px-3 py-1 border border-slate-400 rounded" type="password" placeholder="Hasło" id="password">
        <button on:click={verifyUser} class="bg-slate-600 px-5 py-2 my-3 border border-slate-700 text-white hover:bg-slate-800 hover:border-slate-900 rounded-md transition-colors">Zaloguj się</button>
        {#if error}
            <p class="text-sm text-red-700 text-center">{error}</p>
        {/if}
    </section>
</div>