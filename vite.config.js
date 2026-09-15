import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: caminho do projeto no GitHub Pages (https://lucas-werner.github.io/naomidoula/)
export default defineConfig({
  plugins: [react()],
  base: '/naomidoula/',
})
