import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, 'index.html'),
        about:      resolve(__dirname, 'about.html'),
        products:   resolve(__dirname, 'products.html'),
        gallery:    resolve(__dirname, 'gallery.html'),
        leadership: resolve(__dirname, 'leadership.html'),
        contact:    resolve(__dirname, 'contact.html'),
      },
    },
  },
});
