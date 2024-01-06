import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "box-shadow": "1px 5px 10px rgba(0,0,0,0.2)",
      },
      colors: {
        accent: "hsl(234, 12%, 34%)",
        primary: "hsl(229, 6%, 66%)",
        secondary: "hsl(0, 0%, 98%)",
        "link-color": "hsl(228, 45%, 44%)",
      },
    },
  },
  plugins: [],
};
export default config;
