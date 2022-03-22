<script>
    let name = ""
    let universe = ""
    let error = ""
    let greg = {}

    const verifyData = () => {
        if(typeof name == "string" && typeof universe == "string" && universe.length == 4)
        {
            greg = {
                name: name,
                universe: universe
            }
            console.table(greg)
        }
        else if(universe.length != 4)
            error = "Błąd. Nazwa uniwersum musi składac sie dokładnie z 4 znaków."
        else 
            error = "Podane dane są błędne."
    }
</script>

<h1 class="text-center text-4xl my-5">Dodaj dane</h1>
<div class="flex justify-center items-center flex-col">
    <form on:submit|preventDefault={verifyData} class="h-80 w-80 flex justify-center items-center flex-col border rounded-xl shadow-xl">
        <input class="my-3 px-3 py-1 border border-slate-400 rounded" type="text" placeholder="Nazwa rodzajowa" bind:value={name}>
        <input class="my-3 px-3 py-1 border border-slate-400 rounded" type="text" placeholder="Uniwersum" bind:value={universe}>
        <button type="submit" class="bg-slate-600 px-5 py-2 my-3 border border-slate-700 text-white hover:bg-slate-800 hover:border-slate-900 rounded-md transition-colors">Dodaj</button>
        {#if error}
            <p class="text-sm text-red-700 text-center">{error}</p>
        {/if}
    </form>
</div>