<script>
    const handleClick = () => {
        console.log("omamale")
    }
</script>

<div class="flex justify-center items-center h-screen flex-col">
    <h1 class="text-4xl">Eluwina</h1>
    <button on:click={handleClick} class="bg-slate-600 px-5 py-2 my-3 border-4 border-slate-700 text-white hover:bg-slate-800 hover:border-slate-900 rounded-md">Zaloguj się</button>
</div>
