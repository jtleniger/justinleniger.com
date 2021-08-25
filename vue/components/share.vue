<template>
  <div class="share">
    <a :href="`https://twitter.com/intent/tweet?text=${url}`" target="_blank">
      <icon name="twitter" :size="size" />
    </a>
    <a :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`" target="_blank">
      <icon name="facebook" :size="size" />
    </a>
    <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${url}`" target="_blank">
      <icon name="linkedin" :size="size" />
    </a>
  </div>
</template>

<script>
import Icon from '~/components/icon.vue'

export default {
  components: {
    icon: Icon
  },
  data: function() {
    return {
      url: null,
      size: '1em'
    }
  },
  mounted() {
    this.url = window.location.href
  }
}
</script>

<style lang="scss">
@import '~/scss/colors';

.share {
  margin: 1em 0;

  .feather {
    fill: $dark-background;
    stroke: $purple-700;
    transition: stroke 150ms ease;

    &:hover {
      stroke: $purple-800;
    }
  }
}
</style>