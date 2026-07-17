/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#111318",
          800: "#1F2329",
          700: "#3A3F47",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#FAFAFB",
        },
        border: {
          DEFAULT: "#E5E7EB",
          strong: "#D1D5DB",
        },
        slate: {
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
        },
        accent: {
          DEFAULT: "#0071E3",
          light: "#E8F1FD",
          dark: "#0058B5",
        },
        signal: {
          success: "#1E8E3E",
          warning: "#B45309",
          danger: "#DC2626",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        card: "none",
        cardHover: "0 1px 2px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
}
