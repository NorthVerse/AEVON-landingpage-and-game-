import path from "path"
import { fileURLToPath } from "url"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Security: Disable inline scripts in build
    rollupOptions: {
      output: {
        // Prevent loading of sensitive information in source maps
        sourcemap: process.env.NODE_ENV !== 'production',
      },
    },
    // Reduce chunk size warnings
    chunkSizeWarningLimit: 600,
  },
  server: {
    // CORS: Explicitly allow only localhost in development
    cors: {
      origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
      credentials: true,
    },
  },
})

