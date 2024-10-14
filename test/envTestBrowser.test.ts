import { REACT_APP_JEST_TEST_IN_TEST } from '../src/dotenv'

describe('react Browser Environment - Test Environment Variables', () => {
  it('should load REACT_APP_JEST_TEST_IN_TEST from .env.test', () => {
    expect(REACT_APP_JEST_TEST_IN_TEST).toBe('t3')
  })
})
