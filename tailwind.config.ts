import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
        transparent: "transparent",
        background: "#121212", //nav-bar 6% opacity
        primary: "#2A2A2A", //contact and download cv background
        "white-cold": "#D9E3E9",
        "white": "#fff",
        purple: "#831EFF",
        "nav-border": "#2E3032",
        "nav-hover": "#ADB4B8",
        "verification": "#27C586",
        "secondaryButtonColor": "#292828",
        "green-500": "#10B981",
        },
      fontSize: {
        xs: "0.75rem",  /* 12px */
        sm: "0.875rem", /* 14px */
        base: "1rem",    /* 16px */
        "lg": "1.125rem", /* 18px */
        "xl": ["1.25rem","1.75rem"],  /* 20px */
        "2xl": "1.5rem", //28px
        "3xl": "2.2rem", //32px
        "4xl": ["2.75rem","3.25rem"], //44px
        "5xl": ["3.25rem","4rem"],
        "6xl": ["4.5rem","5rem"], //72px
        "7xl": ["6rem","7rem"],   /* 72px */
      },
      spacing: {
        '0': '0rem',       // 0px
        'px': '1px',       // 1px
        '0.5': '0.125rem', // 2px
        '1': '0.25rem',    // 4px
        '1.5': '0.375rem', // 6px
        '2': '0.5rem',     // 8px
        '2.5': '0.625rem', // 10px
        '3': '0.75rem',    // 12px
        '3.5': '0.875rem', // 14px
        '4': '1rem',       // 16px
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px
        '7': '1.75rem',    // 28px
        '8': '2rem',       // 32px
        '9': '2.25rem',    // 36px
        '10': '2.5rem',    // 40px
        '11': '2.75rem',   // 44px
        '12': '3rem',      // 48px
        '13': '3.25rem',   // 52px (custom)
        '14': '3.5rem',    // 56px
      },
      backgroundImage: {
        "avatar-gradient": "linear-gradient(#FF0000 0%, #003EDB 14%, #9E26C3 37%, #86F646 47%, #9C1467 58%, #9B0E4A 78%, #230E9B 85%, #990000 100%)",
        "heroTitle-gradient": "linear-gradient(#ffffff 64%, #767676af 93%)",
        "grid-gradient": "radial-gradient(transparent 0%,#121212bb 40%, #121212 70%)"
      },
      keyframes: {
        "square-lights": {
          "0%": { backgroundColor: "red" },
          "100%": { backgroundColor: "blue" },
        },
      },
      animation: {
        "square-animation": "square-lights 500ms ease infinite",
      },      
  },
  plugins: [],
} satisfies Config;
