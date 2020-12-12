<script context="module" lang="ts">
  export async function preload(page) {
    return { params: page?.params || {} };
  }
</script>

<script lang="ts">
  import { counter } from "$stores/store";
  import { onMount } from "svelte";
  export let params: any = {};
  let data: any;
  let loading = false;
  let loaded = false;

  onMount(() => {
    if (params?._id) {
      loading = true;
      fetch(`http://localhost:4000/api/todos/${params._id}`)
        .then(async (res) => {
          if (res.ok) {
            data = await res.json();
          } else {
            data = null;
          }
          loading = false;
          loaded = true;
        })
        .catch((error) => {
          console.error("Error : ", error);
          loading = false;
          loaded = true;
        });
    }
  });
</script>

<svelte:head>
  <title>{data ? data.title : 'Details'}</title>
</svelte:head>

{#if loading}
  <p>Loading...</p>
{:else if loaded && !data}
  <p>Cannnot get data.</p>
  <p>
    <i>
      Note: You need loal database server running on port 4000 to see this page.
    </i>
  </p>
{:else if data}
  <h1>{data.title || 'Untitled'}</h1>
  <h3>{data.description || '-'}</h3>
  <p>Button Counter : {$counter}</p>
{/if}
