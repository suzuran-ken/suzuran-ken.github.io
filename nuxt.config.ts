// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'ja'
      }
    },
  },

  nitro: {
    prerender: {
      failOnError: false
    }
  },
  modules: ['@nuxt/content', '@nuxt/image']
})