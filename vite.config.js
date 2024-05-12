import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '',
  plugins: [react()],
  server: {
    open: true,
    port: 5000,
    watch: {
      usePolling: true,
    }
  },
})