/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat',],
      },
      spacing: {
        '18xs': '18px',
        '55xs': '55px',
        '72': '72px',
        '76': '76px',
        '85': '85px',
        '403': '403px',
        '600': '618px',
        '358': '357px',
        '151': '151px',
        '146': '146px',
        '491': '491px',
        '536': '536px',
        '148': '148px',
        '424': '424px',
        '211': '211px',
        '337': '359px',
        '28xl': '28rem',
        '32xl': '32rem',
        '296': '296px',
        '18xl': '18rem',
        '211': '211px',
        '439': '401px',
        '783': '678px',
        '272': '249px',
        '309': '309px',
        '711': '652px',
        '399': '399px',
        '19xl': '315px',
        '552': '523px',
        '620': '620px',
        '716': '716px',
        '289': '289px',
        '448': '448px',
        '455': '455px',
        '366': '366px',
      },
      colors: {
        'bread': {
          '100': '#1E1E1E',
          '200': 'rgba(245, 247, 250, 0.24)',
          '300': '#1F2224',
          '400': 'rgba(224, 224, 255, 0.6)',
          '500': '#FF00AA',     
          '600': '#D9D9D9',          
          '700': 'rgba(255, 255, 255, 0.03)',
          '800': '#17191B',
          '900': 'rgba(224, 224, 255, 0.8)',
        },
        'future': {
          '100': "#FF5E00",
          '200': "#C32DE1",
          '300': "#00BBFF",
          '400': "#16B862",
          '500': "#00B8B9",
          '600': "#FFAB00",
          '700': "#5D2DE1",
          '800': "#00FFAA",
        }
      },
      maxWidth: {
        '1360': '1360px',
      },
      backgroundImage: {
        'layer-btn':" linear-gradient(135deg, #FF00AA 0%, #F54562 100%)",
        'liner-btn':" linear-gradient(180deg, rgba(36, 0, 255, 0) 0%, #FF00AA 100%)",
        'integrations-main-gradiend-1':" linear-gradient(4.47deg, #FF9928 -9.97%, rgba(23, 25, 27, 0) 91.13%)",
        'hero-header': "url('../img/header-hero.png')",
      },
      screens: {
        'xs': '444px',
        // => @media (min-width: 444px) { ... }
      },
  
    },
  },
  plugins: [],
}

