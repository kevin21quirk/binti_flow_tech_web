/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors - Red, White, Black only
        'binti-red': '#E40205',
        'binti-grey': '#333333',
        // Investment proposal colors
        'binti-purple': '#A855F7',
        'binti-magenta': '#EC4899',
        'binti-cyan': '#06B6D4',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'binti-gradient': 'linear-gradient(135deg, #06B6D4 0%, #A855F7 50%, #EC4899 100%)',
      },
    },
  },
  plugins: [],
}
