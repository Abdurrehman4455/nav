module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontSize: {
        '12.2pt': '12.2pt', // Add custom font size
      },
      backgroundImage:
      {
        'card-bg':"url('/src/Images/image 18.svg')",
        'cards-bg':"url('/src/Images/image 19 (3).svg')",
        'cards-bg1':"url('/src/Images/image 20.svg')"
      },
    },
  },
  plugins: [],
};