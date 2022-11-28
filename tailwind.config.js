/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-alpha': 'rgba(36,36,36,0.5)'
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}
