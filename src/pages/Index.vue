<template>
  <Layout>
    <section v-html="content"></section>
  </Layout>
</template>

<script>
import { formatHeadings } from '@/utils/utils'

export default {
  metaInfo() {
    return {
      titleTemplate: '',
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
        }
      ]
    }
  },
  data() {
    return {
      title: '',
      description: '',
      ogimage: '',
      url: ''
    }
  },
  created() {
    this.content = formatHeadings(this.$page.pageContent.content)
    this.title = this.$page.pageContent.title
    this.description = this.$page.pageContent.description
    this.ogimage = `${this.prod ? 'https://swank.dev' : 'http://localhost:8888'}/.netlify/functions/ogimage?title=${encodeURIComponent(this.description)}&category=${encodeURIComponent(this.title)}`
    this.url = `${this.baseURL}/`
  }
}
</script>

<page-query>
query PageContent {
   pageContent: pageContent (id: "s1oede") {
    content
    title
    description
  }
}
</page-query>
