export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000', // Replace with your backend API URL
    },
  },

  compatibilityDate: '2024-10-30',
});