<template>
  <Layout>
    <section v-html="content"></section>
  </Layout>
</template>

<script>
import { alterHeadings } from '@/utils/utils'

export default {
  metaInfo: {
    title: 'Uses (My Gear)'
  },
  created() {
    this.content = alterHeadings(this.$page.pageContent.content)
  }
}
</script>

<page-query>
query PageContent {
   pageContent: pageContent (id: "3e5vfzx") {
    content
  }
}
</page-query>
