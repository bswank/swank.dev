<template>
  <Layout>
    <section>
      <h1><span>Weblog</span></h1>
      <div class="posts">
        <PostItem v-for="post in posts" :key="post.id" :post="post" />
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
  metaInfo() {
    return {
      title: this.title,
      description: this.description,
      meta: [
        {
          property: 'og:title',
          content: this.title
        },
        {
          property: 'og:description',
          content: this.description
        },
        {
          property: 'og:image',
          content: this.ogimage
        }
      ]
    }
  },
  data() {
    return {
      title: 'Weblog',
      description:
        'Remember when blogs were weblogs and blogspot was the coolest thing? Crazy.',
      ogimage: '',
      posts: []
    }
  },
  created() {
    this.ogimage = `${
      this.prod ? 'https://swank.dev' : 'http://localhost:8888'
    }/.netlify/functions/ogimage?title=${encodeURIComponent(
      this.description
    )}&category=${encodeURIComponent(this.title)}`
    this.posts = this.$page.allPost.edges
      .map(e => e.node)
      .filter(e => (this.prod ? new Date(e.date) <= new Date() : e))
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
        category
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
