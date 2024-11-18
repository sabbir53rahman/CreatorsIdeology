// tailwind.config.js

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14F2A8',
      },
      fontFamily: {
        grotesk: ['Familjen Grotesk', 'sans-serif'],
      },
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
});


