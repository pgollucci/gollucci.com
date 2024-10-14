import antfu from '@antfu/eslint-config'
import nextPlugin from '@next/eslint-plugin-next'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu({
  //  files: ['jest.config.ts', 'jest.setup.tsx', 'src/**/*.tsx', 'src/**/*.ts', 'test/**/*.tsx', 'test/**/*.ts'],
  ignores: [
    '.mergify.yml',
    '.pnpm-store/',
    '.vscode/settings.json',
    'next-env.d.ts',
    'out/',
    'package.json',
    'src/dotenv.ts',
    'src/pages/index.tsx',
    'tsconfig.json',
  ],
  plugins: {
    react,
    'react-hooks': reactHooks,
    '@next/eslint-plugin-next': nextPlugin,
    tailwindcss,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    // '@next/next/no-img-element': 'error',
    // '@next/next/no-page-custom-font': 'error',
    'tailwindcss/classnames-order': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
})
