/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('assets/img/banner.jpg')"
      },
      fontFamily: {
       montserrat: ['Montserrat']
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
}