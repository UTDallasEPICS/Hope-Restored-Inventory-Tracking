import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // Disable Server-Side Rendering
  ssr: false,

  plugins: ['~/plugins/vue3-qr-reader.client.ts'],

  typescript: {
      shim: false
  },

  compatibilityDate: '2024-11-12'
});