<template>
  <Layout>
    <section>
      <h1><span>Weblog</span></h1>
      <div class="posts">
        <PostItem
          v-for="post in $page.allPost.edges"
          :key="post.node.id"
          :post="post.node"
        />
      </div>
    </section>
  </Layout>
</template>

<script>
import PostItem from '@/components/PostItem'

export default {
  components: {
    PostItem
  },
  metaInfo: {
    title: 'Blog'
  }
}
</script>

<page-query>
query {
  allPost {
    edges {
      node {
        id
        title
        postContext
        tags
        date (format: "MMM DD, YYYY")
        path
      }
    }

  }
}
</page-query>

<style lang="scss" scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-row-gap: var(--big-space);
  grid-column-gap: var(--big-space);
  padding-top: var(--little-space);
}
</style>
