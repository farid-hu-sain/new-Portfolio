/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#080A09",
          secondary: "#0E1110",
        },
        surface: {
          DEFAULT: "#121513",
          hover: "#171B18",
        },
        ink: {
          primary: "#F5F7F5",
          secondary: "#9CA3A0",
          muted: "#6F7772",
        },
        accent: {
          DEFAULT: "#3DDC84",
          soft: "rgba(61, 220, 132, 0.12)",
        },
        line: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display": ["3.25rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "1200px",
      },
      animation: {
        "marquee-left": "marqueeLeft 40s linear infinite",
        "marquee-right": "marqueeRight 40s linear infinite",
      },
      keyframes: {
        marqueeLeft: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
}
