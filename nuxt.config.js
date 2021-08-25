const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Justin Leniger',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;1,300&display=fallback' }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    '~/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/globals.js'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@aceforth/nuxt-optimized-images'
  ],

  markdownit: {
    injected: true,
  },

  optimizedImages: {
    optimizeImages: true
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

  sitemap: {
    hostname: 'https://justinleniger.com',
    gzip: true
  }
}
