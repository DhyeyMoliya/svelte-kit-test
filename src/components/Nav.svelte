<script lang="ts">
  export let page;
</script>

<nav>
  <a href="/" class:active={$page.path === '/'}>Home</a>
  <a href="/about" class:active={$page.path === '/about'}>About</a>
  <a href="/todos" class:active={$page.path === '/todos'}>Todos</a>
</nav>

<style lang="scss">
  nav {
    a {
      padding: 0.7rem 1rem;
      background: #fdfdfd;
      box-shadow: 0 0 3px #dfdfdf;
      margin: 0.5rem 1rem;
      border-radius: 5px;
      text-decoration: none;

      &.active {
        background: #9f9f9f;
        color: white;
      }
    }
  }
</style>
