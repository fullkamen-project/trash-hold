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
        kamen: {
          dark: 'var(--kamen-dark)',
          stone: 'var(--kamen-stone)',
          slate: 'var(--kamen-slate)',
          action: 'var(--kamen-action)',
          danger: 'var(--kamen-danger)',
          heading: 'var(--kamen-heading)',
          icon: 'var(--kamen-icon)',
        },
      },
    },
  },
  plugins: [],
};
export default config;