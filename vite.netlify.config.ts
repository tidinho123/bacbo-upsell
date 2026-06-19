import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Force the Lovable asset JSON to resolve to the local /public reference.
// Runs BEFORE vite-tsconfig-paths so the Lovable CDN URL never ends up in dist.
function overrideHeroAsset(): Plugin {
  const localPath = path.resolve(__dirname, "src/assets/hero-bacbo.spa.json");
  return {
    name: "override-hero-asset",
    enforce: "pre",
    resolveId(source) {
      if (
        source === "@/assets/hero-bacbo.png.asset.json" ||
        source.endsWith("src/assets/hero-bacbo.png.asset.json")
      ) {
        return localPath;
      }
      return null;
    },
  };
}

// Standalone SPA build for Netlify (no SSR, no TanStack Start server).
// Output: dist/index.html + static assets, ready for any static host.
export default defineConfig({
  plugins: [overrideHeroAsset(), tsconfigPaths(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
  },
});
