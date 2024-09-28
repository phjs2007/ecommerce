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
        "fundo": "#2d3250",
        "button": "#a0d62e",
      },
      padding: {
        'main': '88px 40px 0 40px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(94,145,15,1) 0%, rgba(161,193,64,1) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
