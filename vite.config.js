import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({,
  define: {
    VITE_LEVEL: JSON.stringify('LOCAL')
  },
  plugins: [react()],
})
