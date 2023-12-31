/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
    },
     
      colors: {
        primary: {
          100: '#060C1F',
          200: '#32195A', 
          300: '#2da38c', 
          400: '#171136',
          500: '#281e4c',
          600: '#1a2335',
          700: '#131031', 
          800: '#a63cfa', 
          900: '#060C1F',
        },
        secondary: '#3366FF', 
       
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'gradient': {
          to: { 'background-position': '200% center' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  
  
  
}


