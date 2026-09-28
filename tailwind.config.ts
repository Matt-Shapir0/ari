// tailwind.config.ts
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
        school: {
          navy: "#003882",
          yellow: "#FCD22B",
          yellowLight: "#FEF7D6",
          dark: "#001F47",
        },
      },
    },
  },
  plugins: [],
};
export default config;