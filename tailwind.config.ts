import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-start": "hsl(249, 99%, 64%)",
        "gradient-end": "hsl(278, 94%, 30%)",
        "red-error": "hsl(0, 100%, 66%)",
        "light-grayish-violet": "hsl(270, 3%, 87%)",
        "dark-grayish-violet": "hsl(279, 6%, 55%)",
        "very-dark-violet": "hsl(278, 68%, 11%)",
      },
      fontSize: {
        norm: "18px",
      },
      font: {
        "space-grotesk": ["Space Grotesk"],
      },
    },
  },
  plugins: [],
};
export default config;
