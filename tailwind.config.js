import { sky as _sky, cyan as _cyan } from "tailwindcss/colors";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode : "jit",
  theme : {
    extend: {
      colors: {
        sky: _sky,
        cyan: _cyan,
      },
      backgroundImage: {},
    },
  },
  variants : {},
  plugins: [require("daisyui")],
}
