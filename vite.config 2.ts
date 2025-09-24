import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path for GitHub Pages project site: https://tjpilewski44.github.io/tjsdigitals/
  // This ensures asset paths work when served from a subpath.
  base: '/tjsdigitals/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
