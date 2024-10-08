/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient-1":
          "linear-gradient(to bottom, #2A0B44 0%, #3D145F 18%)",
        "custom-gradient-0":
          "linear-gradient(to bottom, #2A0B44 0%, #3D145F 18%, #7129AD 36%, #3A1756 55%, #620AAB 70%, #442260 88%, #000000 99%)",
        "footer-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
        "darkup-gradient":
          "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
      },
      fontFamily: {
        abhaya: ['"Abhaya Libre"', "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        heading: ["Heading", "sans-serif"],
      },
    },
  },
  plugins: [],
};
