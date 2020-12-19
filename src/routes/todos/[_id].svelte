<script lang="ts">
  import { page } from "$app/stores";

  import { counter } from "$client/stores/counter";
  import { onMount } from "svelte";

  let data: any;
  let loading = false;
  let loaded = false;
  onMount(() => {
    if ($page?.params?._id) {
      loading = true;
      fetch(`http://localhost:4000/api/todos/${$page.params._id}`)
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

<section class="padding-top">
  {#if loading}
    <p>Loading...</p>
  {:else if loaded && !data}
    <p>Cannnot get data.</p>
    <p>
      <i>
        Note: You need loal database server running on port 4000 to see this
        page.
      </i>
    </p>
  {:else if data}
    <h1>{data.title || 'Untitled'}</h1>
    <h3>{data.description || '-'}</h3>
    <p>Button Counter : {$counter}</p>
  {/if}
</section>
