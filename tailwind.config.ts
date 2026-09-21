import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        term: {
          bg: "#0a0e0f",
          panel: "#0f1517",
          border: "#1f2b2a",
          green: "#39ff88",
          dim: "#5f7a72",
          amber: "#ffb454",
          red: "#ff5f56",
          text: "#c9d8d3",
        },
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
