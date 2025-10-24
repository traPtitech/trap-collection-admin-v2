// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {}
    }
  },

  modules: ['@nuxt/eslint'],

  runtimeConfig: {
    public: {
      apiUrl:
        process.env.NUXT_PUBLIC_API_URL ||
        'https://collection-dev.trapti.tech/api/v2',
      nodeEnv: process.env.NUXT_PUBLIC_NODE_ENV || 'development',
      useMockApi: process.env.NUXT_PUBLIC_USE_MOCK_API === 'true'
    }
  },

  typescript: {
    strict: true,
    typeCheck: true
  },

  devServer: {
    port: 8080
  },

  vite: {
    server: {
      proxy: {
        '/api/v2': {
          target:
            process.env.NUXT_PUBLIC_API_URL ||
            'https://collection-dev.trapti.tech',
          changeOrigin: true,
          secure: false,
          // ローカル開発用の設定
          cookieDomainRewrite: 'localhost',
          cookiePathRewrite: '/'
        }
      }
    }
  }
});
