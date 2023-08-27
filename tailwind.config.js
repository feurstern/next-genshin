/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container:{
      center:true,
      padding: "1rem",
      screens:{
        lg:'1124px',
        xl: '1124px',
        "2xl" : "1124px"
      },
    },
    fontFamily:{
      Poppins : ["Poppins", "san-serif"]
    },
    // colors:{
    //   "bookmark-purple" : "#52672df",
    //   "bookmark-red" : "fa5959",
    //   'bookmark-blue' : '#9194a2',
    //   'bookmarl-white' : '#f7f7f7'
    // }
  },
  plugins: [],
}
