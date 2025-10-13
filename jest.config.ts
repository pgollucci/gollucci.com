import type { Config } from 'jest'
import nextJest from 'next/jest.js'

// Adjust the path to your Next.js app's root directory
const createJestConfig = nextJest({
  dir: './src',
})

const customJestConfig: Config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/test/**/*.test.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '@swc/jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // moduleFileExtensions must include 'js' even though I don't use them
}

export default createJestConfig(customJestConfig)
