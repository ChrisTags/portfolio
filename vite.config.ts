import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  base: "/portfolio/",
  build: {
    // Force Vite à compiler pour les navigateurs récents supportant
    // le React Compiler et les fonctionnalités modernes.
    target: "esnext",
  },
  css: {
    transformer: "postcss",
  },
});
