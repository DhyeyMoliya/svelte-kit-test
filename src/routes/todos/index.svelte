<script context="module" lang="ts">
  export async function preload(page) {
    try {
      const res = await this.fetch("/api/todos");
      if (res.ok) {
        const data = await res.json();
        return { data };
      } else {
        const error = await res.json();
        this.error(res.status, error);
      }
    } catch (error) {
      console.log("Error : ", error);
      this.error(500, error);
    }
  }
</script>

<script lang="ts">
  import { redirect } from "$clientHelpers/link";
  export let data: any[] = [];
</script>

<h1>TODOS</h1>
{#if data?.length}
  {#each data as todo}
    <div class="task" on:click={() => redirect(`/todos/${todo._id}`)}>
      {todo.title}
    </div>
  {/each}
{/if}

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
