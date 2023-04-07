import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "PWA-zoiex-giphy",
        short_name: "PZG",
        description: "my pwa-zoiex-giphy",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/public/android-chrome-256x256.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});
