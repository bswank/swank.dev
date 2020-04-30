<template>
  <Layout>
    <section v-html="content"></section>
  </Layout>
</template>

<script>
import { alterHeadings } from '@/utils/utils'

export default {
  metaInfo: {
    title: 'Uses (My Gear)',
    description: `Inspired by the tech community's pattern of /uses pages, here's the gear I use on a daily basis.`,
    meta: [
      {
        property: 'og:title',
        content: 'Uses (My Gear) - Swank.dev'
      },
      {
        property: 'og:description',
        content: `Inspired by the tech community's pattern of /uses pages, here's the gear I use on a daily basis.`
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
   pageContent: pageContent (id: "3e5vfzx") {
    content
  }
}
</page-query>
