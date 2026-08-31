import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  // Served from https://<user>.github.io/hpcl_petrochemical/ on GitHub Pages.
  base: process.env.GITHUB_ACTIONS ? "/hpcl_petrochemical/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
