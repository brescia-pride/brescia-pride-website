import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "green": " #11634d",
        "lilac": " #d2c2df",
        "purple": " #523376",
        "lime": " #d4f3b8",
        "pink": " #ffc2d2",
        "red": " #a71729",
        "blue": " #0e5bc0"     
      },
    },
  },
  plugins: [],
}
export default config
