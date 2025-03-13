module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //custom screen breakpoints
      screens: {
        'xs': '360px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      //custom colors
      colors: {
        darkBlue: '#0A244A',
        skyBlue: '#5DADE2',
        electricBlue: '#009CC3',
        darkGray: '#1C1C1E',
        lightGray: '#F2F2F2',
      },
      
      //custom font family
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      
      //custom heights
      height: {
        80: '20rem', 
        88: '22rem',
      },

      //custom widths
      width: {    
        88: "22rem",
        104: "26rem",
        112: '28rem',
        120: '30rem',
        128: '32rem',
        136: '34rem',
        144: '36rem',
        152: '38rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        208: '52rem',
        224: '56rem',
      },

      //custom border
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
};