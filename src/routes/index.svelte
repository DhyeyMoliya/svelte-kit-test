<script lang="ts">
  import Counter from "$components/Counter.svelte";
  import { getStores } from "$app/stores";
  const session = getStores().session;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<h1>Hello Svelte World!</h1>
<Counter />
<p>Session Counter : {$session?.counter ?? '-'}</p>
<p>
  Visit the
  <a href="https://svelte.dev">svelte.dev</a>
  to learn how to build Svelte apps.
</p>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 4rem auto;
    max-width: 14rem;
  }
</style>
