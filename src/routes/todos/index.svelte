<script lang="ts">
  import { goto } from "$app/navigation";
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  let data = writable([]);
  let error = writable(null);
  let loading = writable(false);
  onMount(() => {
    loading.set(true);
    fetch("http://localhost:4000/api/todos")
      .then(async (res) => {
        if (
          res &&
          res.ok &&
          res.headers?.has("Content-Type") &&
          res.headers?.get("Content-Type").startsWith("application/json")
        ) {
          data.set(await res.json());
        } else {
          data.set([]);
          error.set({
            status: res.status,
            error:
              res.headers?.has("Content-Type") &&
              res.headers?.get("Content-Type").startsWith("application/json")
                ? await res.json()
                : await res.text(),
          });
        }
        loading.set(false);
      })
      .catch((err) => {
        console.log("Error : ", err);
        error.set({ status: 500, error: err });
        data.set([]);
        loading.set(false);
      });
  });
  $: console.log($data);
</script>

<svelte:head>
  <title>Todos</title>
</svelte:head>

<h1>TODOS</h1>
{#if !$loading}
  {#if !$error}
    {#if $data.length}
      {#each $data as todo}
        <div class="task" on:click={() => goto(`/todos/${todo.id}`)}>
          {todo.title}
        </div>
      {/each}
    {/if}
  {:else}
    <p>Error getting data</p>
    <p>
      <i>
        Note: You need loal database server running on port 4000 to see this
        page.
      </i>
    </p>
  {/if}
{:else}<span>Loading...</span>{/if}

<style>
  .task {
    max-width: 400px;
    padding: 1rem;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 0 auto 1rem auto;
    background: #fdfdfd;
    cursor: pointer;
    font-weight: 600;
  }

  .task:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
</style>
