
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: '湘雲日本旅遊網站',
        short_name: '湘雲旅行',
        description: '一個甜甜的日系旅遊導覽網站',
        theme_color: '#f6d5d8',
        background_color: '#fff5f7',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'pwa-icon.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
