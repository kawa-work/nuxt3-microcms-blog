import { defineNuxtConfig } from 'nuxt3'
import vuetify from '@vuetify/vite-plugin'

const { BASE_URL, API_KEY } = process.env

declare module 'vite' {
  interface UserConfig {
    // This is the missing options. Please see https://vitejs.dev/config/#ssr-options
    ssr?: {
      external?: string[]
      noExternal?: string | RegExp | (string | RegExp)[] | true
      target?: 'node' | 'webworker'
    }
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'client/',
  publicRuntimeConfig: {
    baseURL: BASE_URL,
    apiKey: API_KEY,
  },
  privateRuntimeConfig: {
    apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
  },
  css: ['vuetify/styles'],
  vite: {
    plugins: [
      vuetify(),
      {
        // https://github.com/nuxt/framework/issues/2798
        configResolved(config) {
          const vuetifyIdx = config.plugins.findIndex(
            (plugin) => plugin.name === 'vuetify:import'
          )
          const vueIdx = config.plugins.findIndex(
            (plugin) => plugin.name === 'vite:vue'
          )
          if (~vuetifyIdx && vuetifyIdx < vueIdx) {
            const vuetifyPlugin = config.plugins[vuetifyIdx]
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            config.plugins.splice(vuetifyIdx, 1)
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            config.plugins.splice(vueIdx, 0, vuetifyPlugin)
          }
        },
      },
    ],
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': 'false',
    },
  },
})
