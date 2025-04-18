// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        slide: "scrollLeft 30s linear infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
