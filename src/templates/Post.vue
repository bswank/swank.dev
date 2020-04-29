<template>
  <Layout>
    <article>
      <div class="time">
        <span>
          {{ $page.post.date
          }}{{ $page.post.postContext ? ` / ${$page.post.postContext}` : '' }}
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
import { alterHeadings, formatList } from '@/utils/utils'

export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  },
  data() {
    return {
      tags: ''
    }
  },
  created() {
    this.tags = formatList(this.$page.post.tags)
    this.content = alterHeadings(this.$page.post.content)
  }
}
</script>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    postContext
    tags
    date (format: "MMMM DD, YYYY")
  }
}
</page-query>

<style lang="scss" scoped>
.time {
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 0.8em;
}

h1 {
  margin: 0;
}

.tags {
  margin: 15px 0 var(--big-space) 0;
  text-transform: uppercase;
  font-size: 0.8em;
}
</style>
