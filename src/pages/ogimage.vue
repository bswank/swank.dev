<template>
  <div class="layout">
    <h2>
      <span>{{ $route.query.category }}</span>
    </h2>
    <h1>
      <span>{{ $route.query.title }}</span>
    </h1>
    <h2 style="flex: 1;">
      <span>{{ $route.query.tags }}</span>
    </h2>
    <Logo class="fixed-logo" />
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: var(--alt);
  width: 1200px;
  height: 630px;
  padding: 75px;

  h1 {
    line-height: 1.4;

    span {
      font-size: 2em;
    }
  }

  h2 {
    margin: 0;

    span {
      font-size: 1.3em;
      background: none;
      color: var(--primary);
    }
  }

  .fixed-logo {
    line-height: 1;
    position: absolute;
    bottom: 50px;
    right: 50px;
  }
}
</style>
