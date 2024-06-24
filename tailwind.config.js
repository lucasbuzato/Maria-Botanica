/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          Verde:'#17301C',
          Cinza:'#3F3F3F'
        },
        backgroundImage: {
          'footer-texture': "url('/src/Componentes/img/image 4.png')",
        },
        height: {
          '128': '45rem',
        },
        width: {
          '128': '65rem',
        }
      },
    },
    plugins: [],
  }