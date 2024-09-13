/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orangish-yellow': '#FFA500', // Add your specific color code here
      },
      borderRadius: {
        '3xl': '1.5rem', // Customize the border-radius as needed
      },
      screens: {
        'tablet': '768px',
      },
    },
  },
  plugins: [],
}

