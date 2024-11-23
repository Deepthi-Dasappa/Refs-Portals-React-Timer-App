/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        playerTextColor: "rgba(6, 69, 67, 1)",
      },
    },
  },
  plugins: [],
};
