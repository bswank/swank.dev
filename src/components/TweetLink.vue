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
  top: 75%;
  transform: translateY(-75%);
  right: 0;

  a {
    display: flex;
    padding: 0;
    line-height: 1;
    cursor: pointer;
    transform: rotate(270deg);
    transform-origin: bottom right;
    font-weight: 600;
    background-color: var(--accent);
    padding: 10px 15px;
    box-shadow: -2px -2px 0 0px var(--alt--overcooked);
  }
}
</style>
