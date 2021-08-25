<template>
  <section class="content narrow">
    <section class="title">
      <h1>Thank you!</h1>
      <p>I'll be in touch shortly.</p>
    </section>
  </section>
</template>

<script>
export default {
  created() {
    setTimeout(() => this.$router.push({ path: '/' }), 3000)
  }
}
</script>