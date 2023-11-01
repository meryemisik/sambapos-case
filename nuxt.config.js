// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: './i18n.config.js',
    langDir: 'locales',
    locales: [
      {
        code: 'tr',
        file: 'tr.json',
        name: "Türkçe"
      },
      {
        code: 'en',
        file: 'en.json',
        name: "English"
      }
    ],
    lazy: true,
    defaultLocale: 'tr'
  },
})
