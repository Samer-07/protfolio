// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Vite config
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5555 
  }
});
