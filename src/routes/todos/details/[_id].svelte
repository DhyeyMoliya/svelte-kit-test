<script>
  import { counter } from "$state/store";
  export let id;
</script>

<h1 class="abc">Todo name {id}</h1>
Counter :
{$counter}

<style>
  .abc {
    color: black;
  }
</style>
