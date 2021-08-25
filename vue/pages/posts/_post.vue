<template>
  <section class="content narrow">
    <section class="title">
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
      <share />
      <em>{{ new Date(post.createdAt).toLocaleDateString() }}</em>
    </section>
    <section v-if="post.hero" class="main-image">
      <lazy-image :src="post.hero" />
    </section>
    <nuxt-content :document="post" />
  </section>
</template>
<script>
import Share from '~/components/share.vue'

export default {
  async asyncData({ params, $content }) {
    const post = await $content('posts', params.post).fetch();

    return {
      post
    }
  },
  head() {
    return {
      meta: [
        { property: 'og:title', content: this.post.title },
        ...(this.post.hero ? [{ property: 'og:image', content: require('~/assets/images/' + this.post.hero) }] : [])
      ]
    }
  },
  components: {
    'share': Share
  }
};
</script>
