import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          green: "#00a884",
          dark: "#111b21",
          light: "#202c33",
          input: "#2a3942",
        },
      },
    },
  },
  plugins: [],
};

export default config; 