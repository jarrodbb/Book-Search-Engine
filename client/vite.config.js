import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//Vite config set up to support graphql
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/graphql": {
        target: "http://localhost:3001",
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
