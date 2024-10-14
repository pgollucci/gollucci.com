import { render } from '@testing-library/react'
import Head from 'next/head'

const SimpleComponent: React.FC = () => {
  return (
    <>
      <Head>
        <title>Test Title</title>
      </Head>
      <div>Test Content</div>
    </>
  )
}

it('title is set correctly', async () => {
  render(<SimpleComponent />)

  expect(document.title).toBe('Test Title')
})
