import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: " #11634d",
        lilac: " #d2c2df",
        purple: " #55338b",
        lime: " #bfdebe",
        pink: " #f7c4d5",
        red: " #c3114b",
        blue: " #1e6184",
        brown: "#5e3700",
        yellow: "#f5f4c4",
        fuchsia: "#ca1382",
        lightblue: "#c4dcf3",
      },
    },
  },
  plugins: [],
};
export default config;
