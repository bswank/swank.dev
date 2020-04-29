<template>
  <Layout>
    <section v-html="content"></section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Introductions'
  },
  created() {
    this.content = this.$alterHeadings(this.$page.pageContent.content)
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
