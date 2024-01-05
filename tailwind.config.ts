import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(var(--bg-primary) / <alpha-value>)",
        secondary: "rgb(var(--bg-secondary) / <alpha-value>)",
      },
      textColor: {
        primary: "rgb(var(--text-primary) / <alpha-value>)",
        secondary: "rgb(var(--text-secondary) / <alpha-value>)",
        teritary: "rgb(var(--text-teritary) / <alpha-value>)",
        link: "hsl(var(--text-link) / <alpha-value>)",
      },
      borderColor: {
        primary: "rgb(var(--border-primary) / 0.1)",
      },
      textDecorationColor: {
        primary: "rgb(var(--border-primary) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
