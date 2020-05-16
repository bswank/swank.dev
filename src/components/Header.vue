<template>
  <header>
    <Logo style="flex: 1;" />
    <nav>
      <ul>
        <li>
          <g-link to="/">intro</g-link>
        </li>
        <li>
          <g-link to="/blog/">blog</g-link>
        </li>
        <li>
          <g-link to="/uses/">/uses</g-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
header {
  margin: var(--big-space) var(--big-space) 0 var(--big-space);
  display: flex;

  nav {
    margin: auto 0;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        display: inline-block;
        margin-left: 25px;

        a {
          display: inline-block;
          color: var(--accent-color);

          &.active--exact {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
