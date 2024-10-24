// nuxt.config.ts

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Adding the Axios module
  modules: ['@nuxtjs/axios'],

  // Configuring Axios
  axios: {
    baseURL: 'http://localhost:8000', // Replace with your backend URL
  },
});
