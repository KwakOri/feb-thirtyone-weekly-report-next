import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          95: "#2D2D2D",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "bg-01": "url('/images/bg-01')",
        "bg-02": "url('/images/bg-02')",
        "bg-03": "url('/images/bg-03')",
      },
    },
  },
  plugins: [],
} satisfies Config;
