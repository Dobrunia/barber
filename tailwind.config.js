/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter'],
        Prosto: ['Prosto One'],
        Roboto: ['Roboto'],
      },
      colors: {
        'button-main': '#977656',
        'button-main-hover': '#55412E',
        'button-main-text-color': '#F2DAC2',
        'button-nav-text-color': '#F2DAC2',
        'button-nav-text-color-hover': '#977656',
        'AboutUs': '#C4C4C4',
        'blackBgColor': '#272727',
      },
      backgroundImage: {
        'main-page': "url('main.png')",
      },
      borderRadius: {
        'img': '8px',
        'backgroundImg': '24px',
      },
      padding: {
        'default': '60px',
        'modile': '20px',
      },
      boxShadow: {
        'filter': '0 0 10px 10px rgba(255, 255, 0, 0.5)',
      },
      screens: {
        'small': '1354px',
        'verySmall': '450px',
      },
    },
  },
  plugins: [],
};
