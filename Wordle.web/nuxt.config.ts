// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/test-utils/module"],
  build: {
    transpile: ['vuetify'],
  },
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css',],
});
