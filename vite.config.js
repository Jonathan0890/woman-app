import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'], 
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i, // Ejemplo: cachear fuentes de Google
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, 
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      manifest: {
        name: 'Woman App',
        short_name: 'Woman',
        description: 'Aplicación para el bienestar femenino', 
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone', 
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png', 
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png', // Asegúrate de tener este archivo en /public
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable', 
          },
        ],
        
        screenshots: [
          {
            src: 'screenshot1.png',
            sizes: '1280x720',
            type: 'image/png',
            label: 'Home Screen',
          },
        ],
        categories: ['health', 'lifestyle'], // Categorías para tiendas de apps
      },
      devOptions: {
        enabled: true, 
        type: 'module',
      },
    }),
  ],
});