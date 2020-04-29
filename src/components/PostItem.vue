<template>
  <div class="post">
    <div class="date">
      <span
        >{{ post.date
        }}{{ post.postContext ? ` / ${post.postContext}` : '' }}</span
      >
    </div>
    <h2>
      <g-link :to="post.path" class="title">
        <span>{{ post.title }}</span>
      </g-link>
    </h2>
    <div class="tags">
      <span>{{ post.tags }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  created() {
    this.post.tags = new Intl.ListFormat('en', { style: 'short' }).format(
      this.post.tags
    )
  }
}
</script>

<style lang="scss" scoped>
.post {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  h2 {
    flex: 1;
    cursor: pointer;
    margin: 15px 0;

    &:hover {
      text-decoration: underline;
    }
  }

  .date {
    line-height: 1;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .tags {
    line-height: 1.1;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
}
</style>
