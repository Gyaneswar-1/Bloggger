/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '0px',
      // => @media (min-width: 640px) { ... }

      'md': '1156px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
,
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display SC"', 'serif'],
        CosmicNeue:['"Comic Neue"'],
        Poppins:['"Poppins"'],
        Times:['"Times New Roman"']
      },
    },
  },
  plugins: [],
}