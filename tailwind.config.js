/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#E76F51",
        secondColor: "#212529",
        thirdColor: "#CED4DA",
        fourthColor: "#F8F9FA",
      },
    },
  },
  plugins: [],
};
