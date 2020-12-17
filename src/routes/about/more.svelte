<script lang="ts">
  import { getStores } from "$app/stores";
  const session = getStores().session;
</script>

<svelte:head>
  <title>About | More</title>
</svelte:head>

<p>This is more info about svelte demo.</p>
<p>Session Counter : {$session?.counter ?? '-'}</p>
<a href="/about">Less</a>
