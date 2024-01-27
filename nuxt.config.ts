// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: { host: 'localhost' },
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  typescript: { typeCheck: true },
  css: ['~/assets/main.css'],
  modules: [
    '@vueuse/nuxt', // https://vueuse.org/nuxt/README.html
    '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org/
    '@pinia/nuxt', // https://pinia.vuejs.org/ssr/nuxt.html
    '@nuxtjs/i18n', // https://v8.i18n.nuxtjs.org/
    '@nuxtjs/color-mode', // https://color-mode.nuxtjs.org/
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'fr',
        name: 'Française',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  colorMode: { classSuffix: '' },
})
