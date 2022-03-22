<script>
    import Card from './components/Card.svelte'
    import {gregors} from '../../stores/gregors'


</script>

<h1 class="text-center text-4xl my-5">Lista gregów</h1>
<div class="grid gap-4 md:grid-cols-3 grid-cols-1 p-4">
{#each $gregors as greg}
    <Card type="greg" prop={greg} />
{/each}
</div>