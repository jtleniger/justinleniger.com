<template>
  <section class="content narrow">
    <h1>Contact Me</h1>
    <form name="contact" method="POST" data-netlify="true" action="/thank-you">
      <input type="hidden" name="form-name" value="contact" />
      <input type="email" name="email" id="email" placeholder="Email" />
      <textarea name="message" id="message" placeholder="Message" cols="30" rows="10"></textarea>
      <input type="submit" value="submit" />
    </form>
  </section>
</template>

<style lang="scss">
@import '~/scss/colors';

form {
  input,
  textarea {
    display: block;
    width: 100%;
    margin: 1rem 0;
    border: 1px solid $dark-background;
    background-color: $grey-900;
    padding: 1rem;

    &:focus {
      outline: 1px solid $purple-700;
    }
  }
}
</style>