 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
            'custom-gradient': 'linear-gradient(to right, #3752FD, #9BA8F8)',
        },
        colors: {
            'custom-purple-20': 'rgba(87,55,253,0.2)',
          }
      },
    },
    plugins: [],
  }