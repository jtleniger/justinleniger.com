<template>
  <div>
    <div class="container">
      <nav>
        <nuxt-link class="home" to="/">Home</nuxt-link>
        <nuxt-link to="/posts">Blog</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
      </nav>
      <div class="page">
        <nuxt />
      </div>
      <footer>
        <p>©{{ new Date().getFullYear() }}, Justin Leniger</p>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
@import '~/scss/colors';
@import '~/scss/sizes';

nav {
  background: linear-gradient(45deg, #562d55, #414d72);
  padding: 1rem;
  font-size: 1.25rem;

  @include page-width();

  a {
    color: $grey-400;
    margin-right: 1em;

    &:hover {
      color: $grey-600;
    }

    &:active, &.nuxt-link-exact-active {
      color: $grey-600;
    }

    &.home {
      font-weight: 700;
      color: $grey-400;
    }
  }
}

footer {
  background-color: $grey-900;
  padding: 1rem;
  
  @include page-width();

  p {
    text-align: center;
  }
}
</style>