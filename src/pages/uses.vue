<template>
  <Layout>
    <section v-html="content"></section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Uses (My Gear)'
  },
  created() {
    this.content = this.$alterHeadings(this.$page.pageContent.content)
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
