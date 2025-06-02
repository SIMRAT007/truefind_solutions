// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust based on your project structure
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        scrollReverse: 'scrollReverse 40s linear infinite',
      },
    },
  },
  plugins: [],
};
