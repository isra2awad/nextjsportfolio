/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "inset-9": "inset 0 0 0 9px rgba(222, 217, 251, 0.8)",
      },
      width: {
        200: "200 px",
      },
      height: {
        200: "200 px",
      },
      keyframes: {
        profileAnimate: {
          "0%, 100%": {
            "border-radius": "60% 40% 30% 70%/60% 30% 70% 40%",
          },
          "50%": {
            "border-radius": "30% 60% 70% 40%/50% 60% 30% 60%",
          },
        },
      },
      animation: {
        profileAnimate: "profileAnimate 8s ease-in-out infinite 1s",
      },
    },
  },
  plugins: [],
};
