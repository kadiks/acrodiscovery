import path, { resolve } from "path";

import { chromeExtension } from "vite-plugin-chrome-extension";
import { defineConfig } from "vite";
import replace from "@rollup/plugin-replace";

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
    outDir:
      process.env.BUILD_ENV === "development" ? "build/dev" : "build/dist",
  },
  plugins: [
    replace({
      PROXY_SERVER_URL:
        process.env.BUILD_ENV === "development"
          ? "http://localhost:3000/api/vendors/notion/databases/glossary"
          : "https://acrodiscovery.vercel.app/api/fetchWiki",
      preventAssignment: true,
    }),
    chromeExtension(),
  ],
});
