<template>
  <Layout>
    <section v-html="content"></section>
  </Layout>
</template>

<script>
import { alterHeadings } from '@/utils/utils'

export default {
  metaInfo: {
    title: 'Introductions',
    description: `Hey, my name is Brian Swank. I'm a software engineer for Spacebase and I live in Lancaster, Pennsylvania.`,
    meta: [
      {
        property: 'og:title',
        content: 'Introductions - Swank.dev'
      },
      {
        property: 'og:description',
        content: `Hey, my name is Brian Swank. I'm a software engineer for Spacebase and I live in Lancaster, Pennsylvania.`
      }
    ]
  },
  created() {
    this.content = alterHeadings(this.$page.pageContent.content)
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
