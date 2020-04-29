<template>
  <main role="main">
    <div class="wrapper">
      <Header />
      <div
        :class="[
          'router',
          { spacious: $route.path === '/blog' || $route.path === '/blog/' }
        ]"
      >
        <slot />
      </div>
      <Footer />
    </div>
  </main>
</template>

<script>
import 'normalize.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--alt);
  border-top: 3px solid var(--accent);
}

.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.router {
  flex: 1;
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: var(--big-space);

  &.spacious {
    width: 100%;
    max-width: 1800px;
  }
}

section + section,
article + article {
  margin-top: var(--big-space);
}
</style>
