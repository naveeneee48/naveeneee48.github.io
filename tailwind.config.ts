import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        term: {
          bg: "#05070a",
          panel: "#0d1117",
          border: "#1c232e",
          cyan: "#22d3ee",
          purple: "#a78bfa",
          green: "#39ff88",
          dim: "#8b93a1",
          amber: "#ffb454",
          red: "#ff5f56",
          text: "#e6edf3",
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
