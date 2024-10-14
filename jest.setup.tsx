import type { ReactNode } from 'react'
import dotenv from 'dotenv'
import React from 'react'

import '@testing-library/jest-dom'

dotenv.config({ path: '.env.test' })

jest.mock('next/head', () => {
  return ({ children }: { children: ReactNode }) => <>{children}</>
})
