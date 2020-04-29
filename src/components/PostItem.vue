<template>
  <div class="post">
    <div class="date">
      <span>
        {{ post.date }}{{ post.category ? ` // ${post.category}` : '' }}
      </span>
    </div>
    <h2>
      <g-link :to="post.path" class="title">
        <span>{{ post.title }}</span>
      </g-link>
    </h2>
    <div v-if="tags" class="tags">
      <span>{{ tags }}</span>
    </div>
  </div>
</template>

<script>
import { formatList } from '@/utils/utils'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      tags: ''
    }
  },
  created() {
    this.tags = formatList(this.post.tags)
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
    margin: 15px 0;

    &:hover {
      text-decoration: underline;
    }
  }

  .date {
    line-height: 1;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .tags {
    line-height: 1.1;
    font-size: 0.7rem;
    text-transform: uppercase;
  }
}
</style>
