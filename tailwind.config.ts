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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        greenText: '#45AC60',
        greenBackgroundFrom: '#45AC60',
        greenBackgroundTo: '#7EDC97',
        greenBackgroundObjects: '#45AC6040',

        sage: '#45AC60',
        sageLight: '#7EDC97',
        sageDark: '#2B9B5B',
        sageOpacityHigh: '#45AC601A',
        sageOpacityHigher: '#45AC600D',
        grayLight: '#9C9C9C',
        grayLighter: '#A6A6A6',
        stone: '#8E8E8F',

      },
    },
  },
  plugins: [],
}


export default config
