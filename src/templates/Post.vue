<template>
  <Layout>
    <TweetLink :uri="tweetURI" />
    <article>
      <div class="time">
        {{ $page.post.path }}
        <span> {{ $page.post.date }}{{ $page.post.category ? ` // ${$page.post.category}` : '' }} </span>
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
import TweetLink from '@/components/TweetLink'
import { formatHeadings, formatTags } from '@/utils/utils'

export default {
  components: {
    TweetLink
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
          property: 'og:url',
          content: this.url
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
      title: '',
      description: '',
      ogimage: '',
      url: '',
      tweetURI: ''
    }
  },
  created() {
    this.tags = formatTags(this.$page.post.tags)
    this.content = formatHeadings(this.$page.post.content)
    this.title = this.$page.post.title
    this.description = this.$page.post.description
    this.ogimage = `${this.baseURL}/.netlify/functions/ogimage?title=${encodeURIComponent(this.title)}&category=${encodeURIComponent(this.$page.post.category)}&tags=${encodeURIComponent(this.tags)}`
    this.url = `${this.baseURL}/blog/${this.$page.post.slug}/`
    this.tweetURI = `https://twitter.com/intent/tweet?text=${this.title}&url=${this.url}&hashtags=${this.$page.post.tags.join(',')}`
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
    slug
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
