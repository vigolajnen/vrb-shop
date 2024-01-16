import react from '@vitejs/plugin-react';
import viteEnvCompatible from 'vite-plugin-env-compatible';
import { imagetools } from 'vite-imagetools';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    // base: '/vrb-shop/',
    envPrefix: 'REACT_APP_',
    server: {
      host: true,
    },
    plugins: [
      react(),
      viteEnvCompatible(),
      imagetools(),
      svgr({
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            floatPrecision: 2,
          },
        },
      }),
      ViteImageOptimizer({
        jpg: {
          quality: 80,
        },
        png: {
          quality: 80,
        },
        webp: {
          lossless: false,
        },
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id
                .toString()
                .split('node_modules/')[1]
                .split('/')[0]
                .toString();
            }
          },
        },
      },
    },
  };
});
