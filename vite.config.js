import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true, // Escuchar en todas las interfaces (IPv4 e IPv6)
    strictPort: false, // Si el puerto está ocupado, usar otro
    open: true // Abrir navegador automáticamente
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})

