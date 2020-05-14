<template>
  <Layout>
    <section v-html="content"></section>
  </Layout>
</template>

<script>
import { processHeadings } from '@/utils/utils'

export default {
  metaInfo: {
    title: 'Introductions',
    description: `Hey, my name is Brian Swank. I'm a software engineer for Spacebase and I live in Lancaster, Pennsylvania.`
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
