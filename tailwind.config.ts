import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  screens: {
    s:"350px",
    m:"450px",
    sm: "640px",
    // => @media (min-width: 640px) { ... }
    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1025px",
    // => @media (min-width: 1024px) { ... }

    xl: "1384px",
    // => @media (min-width: 1280px) { ... }

    xxl: "1384px",
    // => @media (min-width: 1384px) { ... }

    xxxl: "1920px",
    // => @media (min-width: 1920px) { ... }
  },
  plugins: [],
}
export default config
