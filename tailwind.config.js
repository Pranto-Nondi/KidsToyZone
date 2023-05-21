/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
          info: "#8DC3EC",
          success: "#176D4B",
          warning: "#DEAF17",
          error: "#FB6041",
        },
        boxShadow: {
          'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'lg-top': '0 -6px 10px -5px rgba(0, 0, 0, 0.1)',
        },
      },
      "dark",
      "cupcake",
      "garden",
      "light",
      "night",
    ],
  },
  plugins: [require("daisyui")],
}

