import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0A0A0A",
        // secondary: "#0A0A0A",
        accent: "#0065F2",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
