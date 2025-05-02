import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,   // Runs on localhost:3000
    host: true    // Allows LAN access (0.0.0.0)
  }
})
