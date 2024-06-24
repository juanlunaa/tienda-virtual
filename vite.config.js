import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /*
  To host in local red
  server: {
    host: '0.0.0.0', // Escuchar en todas las interfaces de red
    port: 3000,// El puerto que deseas usar
  },
  */
})
