import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("", "./src"),
      "@assets": path.resolve("", "./src/assets"),
      "@components": path.resolve("", "./src/components"),
      "@constants": path.resolve("", "./src/constants"),
      "@hooks": path.resolve("", "./src/hooks"),
      "@pages": path.resolve("", "./src/pages"),
      "@stores": path.resolve("", "./src/stores"),
      "@styles": path.resolve("", "./src/styles"),
      "@utils": path.resolve("", "./src/utils"),
    },
  },
});
