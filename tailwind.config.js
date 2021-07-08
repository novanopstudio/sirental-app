const colors = require('tailwindcss/colors');

module.exports = {
   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      colors: {
         transparent: 'transparent',
         current: 'currentColor',
         primary: '#FE5B3E',
         secondary: '#474FA0',
         white: colors.white,
         black: colors.black,
         gray: colors.gray
      },
      minWidth: {
         '0': '0',
         '1/4': '25%',
         '1/2': '50%',
         '3/4': '75%',
         'full': '100%',
      },
      extend: {},
      screens: {
         xs: "375px",
         // => @media (min-width: 640px) { ... }

         sm: "640px",
         // => @media (min-width: 640px) { ... }

         md: "768px",
         // => @media (min-width: 768px) { ... }

         lg: "1024px",
         // => @media (min-width: 1024px) { ... }

         xl: "1280px",
         // => @media (min-width: 1280px) { ... }

         "2xl": "1536px",
         // => @media (min-width: 1536px) { ... }
      },
   },
   variants: {
      extend: {
         backgroundColor: ['active'],
      },
   },
   plugins: [],
};