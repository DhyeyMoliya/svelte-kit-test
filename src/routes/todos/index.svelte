<script>
  import { onMount } from "svelte";

  let posts = [];

  onMount(() => {
    fetch(
      "http://localhost:4000/todos?_limit=2&_sort=title&_order=asc&completed=false"
    )
      .then(async (res) => {
        if (res.ok) {
          posts = await res.json();
        } else {
          throw new Error();
        }
      })
      .catch((error) => {
        console.error("Error : ", error);
      });
  });
</script>

<h1>TODOS</h1>

{#each posts as post}
  <div class="task">{post.title}</div>
{/each}

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
