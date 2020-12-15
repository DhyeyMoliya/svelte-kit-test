<script lang="ts">
  import Nav from "$components/Nav.svelte";
  import { getStores } from "$app/stores";
  const { page } = getStores();
</script>

<main>
  <Nav {page} />
  <slot />
</main>

<style lang="scss">
  :global {
    @import "../client/styles/global.scss";
  }
</style>
