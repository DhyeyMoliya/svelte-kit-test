<script lang="ts">
  import { redirect } from "$helpers/link";

  const getData = (async (): Promise<any[]> => {
    const res = await fetch(
      "http://localhost:4000/todos?_limit=200&_sort=title&_order=asc",
      { headers: { "Content-Accept": "application/json" } }
    );
    if (res.ok) {
      return await res.json();
    } else {
      throw new Error(await res.text());
    }
  })();
</script>

<h1>TODOS</h1>
{#await getData then todos}
  {#each todos as todo}
    <div class="task" on:click={() => redirect(`/todos/details/${todo.id}`)}>
      {todo.title}
    </div>
  {/each}
{:catch error}
  <p>{error.message}</p>
{/await}

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
