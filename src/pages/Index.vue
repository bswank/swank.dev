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
        }
      ]
    }
  },
  data() {
    return {
      title: 'Introductions',
      description: `Hey, my name is Brian Swank. I'm a software engineer for Spacebase and I live in Lancaster, Pennsylvania.`
    }
  },
  created() {
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
