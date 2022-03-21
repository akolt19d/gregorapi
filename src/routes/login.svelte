<script>
    import { fade } from 'svelte/transition'
    import { login } from '../stores/login'


</script>

<div transition:fade class="flex justify-center items-center h-screen flex-col">
    <section class="bg-slate-600 h-60 w-60">
        <input type="text" placeholder="Nazwa użytkownika">
        <input type="password" placeholder="Hasło">
    </section>
</div>