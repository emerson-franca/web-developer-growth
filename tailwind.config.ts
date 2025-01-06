import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#A8A8A8",
        link: "#75A5FF",
        light: "#FFFFFF66",
        "light-blue": "#75A5FF",
        separator: "#1D1D1D",
        success: "#0AFFA7",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
      fontFamily: {
        sans: ["Articulat CF"],
      },
    },
  },
  plugins: [],
};

export default config;
