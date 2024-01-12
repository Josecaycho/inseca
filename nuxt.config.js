export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  app: {
    pageTransition: {name: "page", mode: "out-in"}
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'inseca',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify'
  ],

  build: {
  // transpile: ['jsencrypt']
    postcss: null
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    treeShake: false, // false to import packages npm + vuetify components

    options: { customProperties: true },
    theme: {
      dark: false,
      // themes: getTheme(themes, process.env.TEMPLATE)
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
