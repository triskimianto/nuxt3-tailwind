// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
      '~/assets/css/main.css',
      '@/assets/css/style.css',
    ],
    modules: [
      '@nuxtjs/google-fonts',
      '@nuxt/content'
    ],
    content: {
      documentDriven: true
    },
    googleFonts: {
      families: {
        Poppins: true,
        Pacifico: true,
      }
    },    
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
})
