/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: "#F7227C",
            gray: "#253356"
          },
          dark: {
            "btn-hover": "#003232",
            primary: "#055151",
          },
          green: {
            200: "#07E098",
            500: "#008E8E",
          },
          red: {
            primary: "#EA4335",
            300: "#FF2F94",
            400: "#F7227C",
            500: "#B71D21",
          },
          yellow: "#FFCE20",
          gray: {
            50: "#F5F5F5",
            100: "#EDEDED",
            200: "#B2B7C1",
            300: "#E9EDF7",
            400: "#D5D9E1",
            500: "#E0E5F2",
            600: "#EFEFEF",
            700: "#73767D",
            800: "#5B5B5B"
          },
          bg: "#F4F4F5",
          border: {
            100: "#DDE0E9"
          },
          success: {
            100: "#EAFDEE",
            200: "#147129"
          }
        },
      },
      screens: {
        xxl: "1440px",
      },
      spacing: {
        4.5: "1.125rem",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "btn-bg": "linear-gradient(94deg, #EE294E 0%, #FF1BA5 100%)"
      },
      borderRadius: {
        base: "20px",
      },
      dropShadow: {
        tooltip: "-8px 6px 50px rgba(112, 144, 176, 0.20)",
      },
      boxShadow: {
        tooltipRight: "8px 6px 50px rgba(112, 144, 176, 0.20)",
        card: "0px 4px 8px 0px rgba(115, 128, 163, 0.04)"
      }
    },
  },
  plugins: [],
};
