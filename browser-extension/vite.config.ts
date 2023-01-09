// vite.config.ts
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig, PluginOption } from "vite";
import { chromeExtension } from "vite-plugin-chrome-extension";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  resolve: {
    alias: [{ find: '~', replacement: resolve(__dirname, 'src') }],
  },
  build: {
    rollupOptions: {
      input: "src/manifest.json"
    }
  },
  plugins: [
    react(),
    chromeExtension() as unknown as PluginOption,
    viteStaticCopy({
      targets: [
        {
          src: 'src/netRequestRules.json',
          dest: '.'
        }
      ]
    })
  ]
})