<template>
  <Layout>
    <article>
      <div class="time">
        {{ $page.post.path }}
        <span>
          {{ $page.post.date
          }}{{ $page.post.category ? ` // ${$page.post.category}` : '' }}
        </span>
      </div>
      <h1>
        <span>{{ $page.post.title }}</span>
      </h1>
      <div class="tags">
        <span v-if="tags">{{ tags }}</span>
      </div>
      <div class="content" v-html="content" />
    </article>
  </Layout>
</template>

<script>
import { processHeadings, formatList } from '@/utils/utils'

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      description: this.$page.post.description,
      meta: [
        {
          property: 'og:title',
          content: this.$page.post.title
        },
        {
          property: 'og:description',
          content: this.$page.post.description
        },
        {
          property: 'og:image',
          content: this.ogimage
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:image',
          content: this.ogimage
        }
      ]
    }
  },
  data() {
    return {
      tags: '',
      ogimage: ''
    }
  },
  created() {
    this.tags = formatList(this.$page.post.tags)
    this.ogimage = `${
      this.prod ? 'https://swank.dev' : 'http://localhost:8888'
    }/.netlify/functions/ogimage?title=${encodeURIComponent(
      this.$page.post.title
    )}&category=${encodeURIComponent(
      this.$page.post.category
    )}&tags=${encodeURIComponent(this.tags)}`
    this.content = processHeadings(this.$page.post.content)
  }
}
</script>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    category
    description
    tags
    date (format: "MMMM DD, YYYY")
  }
}
</page-query>

<style lang="scss" scoped>
.time {
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 0.9em;
}

h1 {
  margin: 0;
}

.tags {
  line-height: 1.1;
  margin: 15px 0 var(--big-space) 0;
  font-size: 0.8em;
}
</style>
