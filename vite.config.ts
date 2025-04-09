// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mit_landing_page_library/' // <--- your repo name with leading/trailing slashes
});
