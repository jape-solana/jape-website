/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#14b8a6',
          dark: '#0d9488',
          light: '#5eead4',
        },
        background: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
        },
        text: {
          DEFAULT: '#f8fafc',
          secondary: '#94a3b8',
        },
      },
    },
  },
  plugins: [],
}
