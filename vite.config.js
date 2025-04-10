import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // This can be changed to your repository name if using GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
