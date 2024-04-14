/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F5E8DD",
        textRed: "#1e1515",
        secondary: "#EED3D9",
        third: "#FDFFBC",
        fourth: "#FFECD6",
      },
      backgroundImage: {
        mask: "url ('./src/assets/mask.svg') ",
        dragotiBg: "url('./assets/images/logo/tamagoGray.png') ",
      },
    },
    fontFamily: {
      cblight: ["CamptonBookLight"],
      cbnormal: ["CamptonBook"],
      kinfolk: ["Kinfolk"],
      pixelify: ["Pixelify Sans"],
      irishgrov: ["Irish Grover"],
    },
  },
  plugins: [],
};
