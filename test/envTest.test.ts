import { JEST_TEST_IN_TEST } from '../src/dotenv'

it('should load JEST_TEST_IN_TEST from .env.test', () => {
  expect(JEST_TEST_IN_TEST).toBe('t1')
})
