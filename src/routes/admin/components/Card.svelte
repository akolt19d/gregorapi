<script>
    export let type;
    export let prop;
</script>

{#if type == "greg"}
    <div class="p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center">
        <h2 class="uppercase text-2xl">
            {prop.name} | {prop.universe}
        </h2>
    </div>
{:else}
essa
{/if}