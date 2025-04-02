import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/",  // Make sure this matches your GitHub repo name
  build: {
    outDir: "docs",  // GitHub Pages needs the output in "docs"
  },
  plugins: [tailwindcss(), react()],
});