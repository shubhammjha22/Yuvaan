import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          "framer-motion": ["framer-motion"],
        },
      },
    },
    sourcemap: false, // Optional, only needed if you want to debug production
  },
});
