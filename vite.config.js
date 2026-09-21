import { fileURLToPath, URL } from 'node:url';
import packageJson from './package.json';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(packageJson.version.replaceAll('.', '-')),
    'import.meta.env.VITE_DATE':
      new Date().getUTCFullYear() + ' ' + new Date().toLocaleString('en-US', { month: 'short' }),
  },
});
