import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio-DewnakaKavirathne/',
  plugins: [react()],
  css:{
    modules:{
    localsconvention:"camelCase"
    }
  }
})
