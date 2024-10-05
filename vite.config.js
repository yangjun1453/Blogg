import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueSetupExtend()],
  base:
    process.env.NODE_ENV === "production"
      ? "https://yangjun1453.github.io/Blogg/"
      : "/",
});
