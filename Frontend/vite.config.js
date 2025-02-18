import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // <-- Fixes routing issues on Render
  build: {
    outDir: "dist", // Ensure build output goes to `dist/`
  }
});
