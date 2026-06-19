import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Standalone SPA build for Netlify (no SSR, no TanStack Start server).
// Output: dist/index.html + static assets, ready for any static host.
export default defineConfig({
  plugins: [tsconfigPaths(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      // Replace the Lovable-hosted asset JSON with a local /public reference.
      "@/assets/hero-bacbo.png.asset.json": path.resolve(
        __dirname,
        "src/assets/hero-bacbo.spa.json",
      ),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
  },
});
