/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/views/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors: {
        'custom-purple':'#910A67',
        'purple-one':'#40679E',
        'purple-two': '#344955',
        'pop-color':'rgba(0, 0, 0, 0.788)',
        'name-color':'#50C4ED'
      },
      width:{
        'height-88':"24rem"
      }
    },
  },
  plugins: [],
}

