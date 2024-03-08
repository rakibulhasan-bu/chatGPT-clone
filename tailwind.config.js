/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#212121",
        bgDark: "#171717",
        textGrey: "#ECECEC",
        borderColor: "hsla(0,0%,100%,.15)"
      }
    },
  },
  plugins: [],
}