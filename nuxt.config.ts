// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@fortawesome/fontawesome-free/css/all.min.css','vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.min.css'
    ],
    build: {
        transpile: ['vuetify'],
      },
    modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
    auth: {
        origin: process.env.ORIGIN,
        enableGlobalAppMiddleware: true
    }
})
