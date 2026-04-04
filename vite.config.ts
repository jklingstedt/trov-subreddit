import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      // Optional: configure the routes directory
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
    svgr({
      // SVGR options
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
  },

  css: {
    preprocessorOptions: {
      scss: {
        // Add any global SCSS imports here if needed
      },
    },
  },

  build: {
    outDir: 'build',
    sourcemap: true,
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor'
            }
            if (id.includes('@tanstack/react-router') || id.includes('@tanstack/react-query')) {
              return 'tanstack-vendor'
            }
          }
        },
      },
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  preview: {
    port: 3000,
  },
})
