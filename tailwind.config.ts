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
          dark: '#0D0D0D',   // Глубокий черный фон
          stone: '#1A1A1A',  // Цвет блоков
          slate: '#8E8E8E',  // Серый текст
          action: '#00FF41', // Зеленый акцент (Онлайн)
          danger: '#FF0000', // Красный (Оффлайн)
        },
      },
    },
  },
  plugins: [],
};
export default config;