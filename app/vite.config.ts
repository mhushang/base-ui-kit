import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@base-ui-kit/ui": resolve(__dirname, "../ui/src/index.ts"),
    },
    // Ensure single React instance (critical for hooks)
    dedupe: ["react", "react-dom"],
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  server: {
    port: 3000,
    fs: {
      // Allow importing sibling workspace package sources in dev
      allow: [resolve(__dirname, "..")],
    },
  },
});
