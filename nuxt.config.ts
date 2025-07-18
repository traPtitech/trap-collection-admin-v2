// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  modules: ['@nuxt/eslint'],

  runtimeConfig: {
    public: {
      apiUrl: 'https://api.example.com',
      nodeEnv: process.env.NODE_ENV || 'development'
    }
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  vite: {
    server: {
      proxy: {
        '/proxy': {
          target: process.env.NUXT_PUBLIC_API_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/proxy/, '')
        }
      }
    }
  }
});
