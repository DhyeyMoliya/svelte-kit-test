<script context="module">
  export async function preload(page) {
    const params = page.params;
    return { params };
  }
</script>

<script>
  import { counter } from "$stores/store";
  export let params;
</script>

<h1>Todo name {params._id || '-'}</h1>
Counter :
{$counter}
