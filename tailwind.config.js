module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      camel: {
        light: '#FCC195',
        DEFAULT: '#A68267',
      },
      white: "#FFFFFF",
      black : "#262626"
    },
     fontFamily: {
       'sans': ['"Poppins"', 'Arial', 'Helvetica', 'sans-serif'],
      },
    container: {
      maxWidth : {
        "2xl" : '1440px',
      },
      padding: '1.5rem',
      },
        screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
