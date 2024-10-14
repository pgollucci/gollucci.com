import * as dotenv from 'dotenv'

if (typeof window === 'undefined') {
  // Node.js environment: use fs and path to load dotenv files
  const fs = require('node:fs')
  const path = require('node:path')

  // Load .env.default first
  dotenv.config({ path: path.resolve(__dirname, '../.env.default') })
  // Load the environment-specific .env.$ENV file based on NODE_ENV if it exists
  const { NODE_ENV } = process.env
  const envFilePath = path.resolve(__dirname, `../.env.${NODE_ENV}`)
  if (fs.existsSync(envFilePath)) {
    dotenv.config({ path: envFilePath })
  }

  // Load the default .env file as the last step
  dotenv.config({ path: path.resolve(__dirname, '../.env') })
}

// Export all necessary environment variables directly from process.env
export const {
  REACT_APP_JEST_TEST_VARIABLE,
  REACT_APP_JEST_TEST_IN_TEST,
  JEST_TEST_VARIABLE,
  JEST_TEST_IN_TEST,
  NODE_ENV,
} = process.env