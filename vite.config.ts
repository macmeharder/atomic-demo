import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: [{ find: "@demo", replacement: path.resolve(__dirname, "src") }],
  },

  plugins: [react()],
});
