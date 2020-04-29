<template>
  <Layout>
    <section v-html="content"></section>
  </Layout>
</template>

<script>
import { alterHeadings } from '@/utils/utils'

export default {
  metaInfo: {
    title: 'Introductions'
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
