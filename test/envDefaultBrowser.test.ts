import { REACT_APP_JEST_TEST_VARIABLE } from '../src/dotenv'

describe('react Browser Environment - Default Environment Variables', () => {
  it('should load REACT_APP_JEST_TEST_VARIABLE from .env.default', () => {
    expect(REACT_APP_JEST_TEST_VARIABLE).toBe('t4')
  })
})
