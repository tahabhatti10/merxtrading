import { resolve } from 'path';
import { existsSync, cpSync } from 'fs';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        cantonFair: resolve(__dirname, 'canton-fair.html'),
        cantonFairQuery: resolve(__dirname, 'canton-fair-query.html'),
        contactUs: resolve(__dirname, 'contact-us.html'),
        productStatic: resolve(__dirname, 'product-static.html'),
        sourcing: resolve(__dirname, 'sourcing.html'),
        sourcingQuery: resolve(__dirname, 'sourcing-query.html'),
      },
    },
  },
  plugins: [
    {
      name: 'copy-wp-assets',
      closeBundle() {
        ['wp-content', 'wp-includes'].forEach(dir => {
          const src = resolve(__dirname, dir);
          const dest = resolve(__dirname, 'dist', dir);
          if (existsSync(src)) {
            cpSync(src, dest, { recursive: true, force: true });
          }
        });
      },
    },
  ],
  server: {
    port: 3000,
    open: true,
  },
});
