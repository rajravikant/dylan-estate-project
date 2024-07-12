/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'class',
  theme: {
    
    extend: {
        
        colors: {
          primary : '#122B49',
        },
        fontFamily: {
          pop: ["Poppins"],
        },
      
    },
  },
  plugins: [ require('@tailwindcss/forms'),],
};
