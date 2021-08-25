<template>
  <div class="post-link">
    <div class="text">
      <a v-if="post.href" :href="post.href" target="_blank">{{ post.title }}</a>
      <nuxt-link v-else :to="route">{{ post.title }}</nuxt-link>
      <p v-if="post.description">{{ post.description }}</p>
      <em v-if="post.date">{{ new Date(post.date).toLocaleDateString() }}</em>
    </div>
    <div class="thumbnail">
      <lazy-image v-if="post.hero" :src="post.hero" />
    </div>
  </div>
</template>

<script>
/**
 * Accepts a post that has a title, description, and date.
 */
export default {
  props: ['post', 'href'],
  computed: {
    route() {
      return this.post.slug ? `/posts/${this.post.slug}` : this.post.route
    }
  }
}
</script>

<style lang="scss">
@import '~/scss/colors';

.post-link {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .text {
    * {
      margin: 1rem 0;
    }
  }
  
  a {
    display: block;
    font-size: 2rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid $grey-900;
    padding-bottom: 1rem;
  }

  &:not(:first-child) {
    padding-top: 1rem;
  }

  em {
    display: block;
    color: $grey-600; 
  }

  .thumbnail {
    img {
      max-width: 320px;
    }
  }
}
</style>