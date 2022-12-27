import path, { resolve } from "path";
import { defineConfig } from "vite";
import { chromeExtension } from "vite-plugin-chrome-extension";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      input: "src/manifest.json",
    },
  },
  plugins: [chromeExtension()],
});
