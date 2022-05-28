module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          mycolor: "#0FCFEC",
          primary: "#585959",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          warning: "#f87171",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      "cupcake",
    ],
  },
}
