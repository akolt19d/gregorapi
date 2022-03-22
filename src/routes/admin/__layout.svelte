<script>
    import {login} from '../../stores/login.js'
    import { fade } from 'svelte/transition'
    import Nav from './components/Nav.svelte'

    let isAdmin = false;
    login.subscribe(data => {
        isAdmin = data['isLogged']
    })


</script>

{#if isAdmin}
    <div transition:fade>
        <Nav/>
        <slot></slot>
    </div>
{:else}
    <div class="flex flex-center flex-col">
        <p class="text-center">
            Nie masz dostępu do tej strony.
            <a href="/" class="text-sky-700 underline">Powrót</a>
        </p>
    </div>
{/if}