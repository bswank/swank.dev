<template>
  <div class="trigger">
    <a target="_blank" :href="uri">Tweet</a>
  </div>
</template>

<script>
export default {
  props: {
    uri: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.trigger {
  position: fixed;
  top: 80%;
  transform: translateY(-80%);
  right: 0;

  a {
    display: flex;
    padding: 0;
    line-height: 1;
    cursor: pointer;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    font-weight: 600;
    background-color: var(--accent);
    padding: 15px 10px;
  }
}
</style>
