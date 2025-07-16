import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});
