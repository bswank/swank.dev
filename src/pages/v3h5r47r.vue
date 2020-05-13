<template>
  <Layout>
    <section v-html="content"></section>
  </Layout>
</template>

<script>
import { processHeadings } from '@/utils/utils'

export default {
  metaInfo: {
    title: 'For Tailwind',
    meta: [
      {
        name: 'robots',
        content: 'noindex, nofollow'
      }
    ]
  },
  created() {
    this.content = processHeadings(this.$page.pageContent.content)
  }
}
</script>

<page-query>
query PageContent {
   pageContent: pageContent (id: "x5n6l6") {
    content
  }
}
</page-query>
