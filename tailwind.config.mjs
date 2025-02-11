/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      "transparent": "transparent",
      "current": "currentColor",
      "black": "#000000",
      "white": "#ffffff",
      "gray": {
        "100": "#f3f4f6",
        "300": "#d1d5db",
        "500": "#6b7280",
        "600": "#4b5563",
        "800": "#1f2937"
      },
      "indigo": {
        "200": "#c7d2fe",
        "300": "#a5b4fc"
      },
      "neutral": {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717"
      },
      "yellow": {
        "50": "#fefce8",
        "100": "#fef9c3",
        "400": "#facc15",
        "500": "#eab308"
      },
      "orange": {
        "100": "#ffedd5",
        "200": "#fed7aa",
        "300": "#fb713b",
        "400": "#fa5a15",
        "500": "#e14d0b",
        "600": "#ea580c"
      },
      "red": {
        "400": "#f87171",
        "500": "#ef4444"
      },
      "zinc": {
        "200": "#e4e4e7",
        "400": "#a1a1aa",
        "500": "#71717a",
        "600": "#52525b",
        "700": "#3f3f46",
        "800": "#27272a",
        "900": "#18181b"
      },
      "blue": {
        "100": "#dbeafe",
        "200": "#bfdbfe",
        "300": "#93c5fd",
        "400": "#60a5fa",
        "500": "#3b82f6",
        "600": "#2563eb",
        "700": "#1d4ed8",
        "800": "#1e40af",
        "900": "#1e3a8a"
      },
      "cyan": {
        "100": "#ccfbf1",
        "200": "#99f6e4",
        "300": "#5eead4",
        "400": "#2dd4bf",
        "500": "#14b8a6",
        "600": "#0d9488",
        "700": "#0f766e",
        "800": "#115e59",
        "900": "#134e4a"
      },
      "purple": {
        "100": "#ede9fe",
        "200": "#ddd6fe",
        "300": "#c4b5fd",
        "400": "#a78bfa",
        "500": "#8b5cf6",
        "600": "#7c3aed",
        "700": "#6d28d9",
        "800": "#5b21b6",
        "900": "#4c1d95"
      }
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
