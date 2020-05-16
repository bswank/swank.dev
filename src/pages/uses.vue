<template>
  <Layout>
    <section v-html="content"></section>
  </Layout>
</template>

<script>
import { processHeadings } from '@/utils/utils'

export default {
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
      title: '',
      description: '',
      ogimage: ''
    }
  },
  created() {
    this.content = processHeadings(this.$page.pageContent.content)
    this.title = this.$page.pageContent.title
    this.description = this.$page.pageContent.description
    this.ogimage = `${
      this.prod ? 'https://swank.dev' : 'http://localhost:8888'
    }/.netlify/functions/ogimage?title=${encodeURIComponent(
      this.description
    )}&category=${encodeURIComponent(this.title)}`
  }
}
</script>

<page-query>
query PageContent {
   pageContent: pageContent (id: "3e5vfzx") {
    content
    title
    description
  }
}
</page-query>
