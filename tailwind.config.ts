import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
white: '#FFFCE1',
black: '#0E100F',
pink: '#FE90AF',
    },
    extend: {
      fontFamily: {
        eiko: ['var(--font-eiko)'],
        mori: ['var(--font-mori)']
      },
      fontSize: {
        hero: 'calc(60px + (120 - 60) * (100vw - 400px) / (1600 - 400))',
        section: 'calc(40px + (80 - 40) * ( 100vw - 400px ) / (1600 - 400))',
        title: 'calc(18px + (24 - 18) * ( 100vw - 400px ) / (1600 - 400));',
        content: 'calc(15px + (21 - 15) * ( 100vw - 400px ) / (1600 - 400));'
      },
padding: {
  '24px': '24px'
},
animation: {
  marquee: 'marquee 20s linear infinite;',
  marqueeR: 'marquee 20s linear infinite reverse;'
},
keyframes: {
  marquee: {
    '0%': {
      transform: 'translateX(0)'
    },
    '100%': {
      transform: 'translateX(-100%)'
    }
  }
},
overflow: {
  unset: 'unset',
},
    },
  },
  variants: {
    extend: {
      overflow: ['responsive'],
    },
  },
  plugins: [
  ],
};
export default config;
