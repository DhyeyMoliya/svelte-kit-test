<script lang="ts">
  import Nav from "$components/Nav.svelte";
  import { stores } from "$app/stores";
  const { page } = stores();
</script>

<main>
  <Nav {page} />
  <slot />
</main>

<style lang="scss">
  :global {
    @import "../styles/global.scss";
  }
</style>
