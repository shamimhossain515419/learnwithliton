/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: {
          base: `var(--color-primary-base)`,
          muted: `var(--color-primary-muted)`,
        },
        secondary: {
          base: `var(--color-secondary-base)`,
          muted: `var(--color-secondary-muted)`,
        },
        white: {
          base: `var(--color-white-base)`,
          muted: `var(--color-white-muted)`,
        },
        blue: {
          base: `var(--color-blue-base)`,
          muted: `var(--color-blue-muted)`,
        },
        red: {
          base: `var(--color-red-base)`,
          muted: `var(--color-red-muted)`,
        },
        black: {
          base: `var(--color-black-base)`,
        },
      },
      backgroundColor: {
        primary: {
          base: `var(--color-primary-base)`,
          muted: `var(--color-primary-muted)`,
        },
        secondary: {
          base: `var(--color-secondary-base)`,
          muted: `var(--color-secondary-muted)`,
        },
        white: {
          base: `var(--color-white-base)`,
          muted: `var(--color-white-muted)`,
        },
        blue: {
          base: `var(--color-blue-base)`,
          muted: `var(--color-blue-muted)`,
        },
        red: {
          base: `var(--color-red-base)`,
          muted: `var(--color-red-muted)`,
        },
        black: {
          base: `var(--color-black-base)`,
        },
      },
      borderColor: {
        white: {
          base: `var(--color-white-base)`,
          muted: `var(--color-white-muted)`,
        },
        blue: {
          base: `var(--color-blue-base)`,
        },
      },
    },
  },
  plugins: [],
};
