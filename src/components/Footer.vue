<template>
  <footer>
    <span class="footer-items">
      &copy; {{ new Date().getFullYear() }} <a target="_blank" href="https://twitter.com/briansw">Brian Swank</a> / <a target="_blank" href="https://github.com/bswank/swank.dev"> Source</a><span v-if="$route.path.includes('/blog/') && $route.path.length > 6"> / <a target="_blank" :href="editURL"> Edit</a></span>
    </span>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      editURL: ''
    }
  },
  created() {
    const mdFile = this.$route.params.slug
    this.editURL = `https://github.com/bswank/swank.dev/edit/master/content/posts/${mdFile}.md`
  }
}
</script>

<style lang="scss">
footer {
  margin: 0 var(--big-space) var(--big-space) var(--big-space);
  text-align: center;

  span.footer-items {
    font-size: 0.75em;
    font-weight: 300;
  }
}
</style>
