import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    VITE_LEVEL: JSON.stringify(process.VITE_LEVEL)
  },
  plugins: [react()],
})
