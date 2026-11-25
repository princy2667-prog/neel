import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The GitHub Pages workflow sets VITE_BASE=/neel/ (project-site sub-path).
// Locally, and on a custom domain, the site is served from the root.
// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
