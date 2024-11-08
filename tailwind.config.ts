import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#51c4d3',
        secondary: '#004e89',
        tertiary: '#0000aa',
        background: '#f0f0f0',
        bgInverted: '#f0f0f0',
        textDefault: '#111111',
      },
    },
  },
  plugins: [
    forms,
    typography,
  ],
}

export default config
