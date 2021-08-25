<template>
  <svg class="feather" :width="size" :height="size">
    <use v-bind="{'xlink:href': `/feather-sprite.svg#${name}`}"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    size: {
      type: String,
      default: '16px'
    }
  }
}
</script>

<style lang="scss">
@import '~/scss/colors';

.feather {
  stroke: $grey-400;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>