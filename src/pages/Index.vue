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
      title: this.$page.pageContent.title,
      description: this.$page.pageContent.description,
      ogimage: null
    }
  },
  created() {
    this.ogimage = `${
      this.prod ? 'https://swank.dev' : 'http://localhost:8888'
    }/.netlify/functions/ogimage?title=${encodeURIComponent(this.description)}`
    this.content = processHeadings(this.$page.pageContent.content)
  }
}
</script>

<page-query>
query PageContent {
   pageContent: pageContent (id: "s1oede") {
    content
  }
}
</page-query>
