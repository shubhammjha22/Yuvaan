// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  server: { host: true },
  plugins: [
    react(),
    // visualizer({
    //   open: true, // Automatically open the visualizer in your browser after build
    //   filename: "stats.html", // The name of the output file
    //   template: "treemap", // You can choose 'sunburst', 'treemap', etc.
    // }),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Optimize React and related packages
          if (id.includes("node_modules")) {
            // React core libraries
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("scheduler")
            ) {
              return "react-core";
            }

            // Framer Motion - split into smaller chunks
            if (id.includes("framer-motion")) {
              return "framer-motion";
            }

            return "vendor";
          }

          // Split your app code
          if (id.includes("src/")) {
            if (id.includes("/components/")) {
              return "ui-components";
            }
            if (id.includes("/pages/")) {
              return "pages";
            }
            if (id.includes("/util/")) {
              return "util";
            }
          }
        },
      },
    },

    // Optimize build settings
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
      },
      mangle: {
        safari10: true,
      },
    },

    // CSS optimization
    cssCodeSplit: true,
    cssMinify: true,

    // Reduce chunk size warnings
    chunkSizeWarningLimit: 1200,
  },

  // Font optimization
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
});
