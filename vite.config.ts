import path from 'node:path';
import fs from 'node:fs';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.BASE_PATH || (process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'),
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-404-for-github-pages',
      closeBundle() {
        const dist = path.resolve(import.meta.dirname, 'dist');
        const index = path.join(dist, 'index.html');
        const notFound = path.join(dist, '404.html');
        if (fs.existsSync(index)) {
          fs.copyFileSync(index, notFound);
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
  server: {
    host: '0.0.0.0',
  },
});
