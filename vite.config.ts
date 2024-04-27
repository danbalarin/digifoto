import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { pigment } from '@pigment-css/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pigment({theme: {}})],
})
