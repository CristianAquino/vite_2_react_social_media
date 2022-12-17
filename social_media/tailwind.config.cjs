/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightgray: "var(--lightgray)",
        gray: "var(--gray)",
        orange: "var(--orange)",
        darkGrey: "var(--darkGrey)",
        caloryCard: "var(--caloryCard)",
        appColor: "var(--appColor)",
        yellow: "var(--yellow)",
        orangeSocial: "var(--orangeSocial)",
        black: "var(--black)",
        grayMedia: "var(--grayMedia)",
        profileShadow: "var(--profileShadow)",
        hrColor: "var(--hrColor)",
        cardColor: "var(--cardColor)",
        inputColor: "var(--inputColor)",
        photo: "var(--photo)",
        video: "var(--video)",
        location: "var(--location)",
        shedule: "var(--shedule)",
      },
      backgroundImage: {
        planCard: "var(--planCard)",
        buttonBg: "var(--buttonBg)",
        yourMessage: "var(--yourMessage)",
      },
      backgroundSize: {
        "100%": "100%",
      },
    },
  },
  plugins: [],
};
