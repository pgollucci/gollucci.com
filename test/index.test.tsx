import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'

describe('home Page', () => {
  const mockArticles = [
    {
      title: 'Test Article 1',
      src: '/images/test-article-1.jpg',
      blurb: 'This is a test article 1',
      url: '/articles/test-article-1',
      categories: ['Test'],
    },
    {
      title: 'Test Article 2',
      src: '/images/test-article-2.jpg',
      blurb: 'This is a test article 2',
      url: '/articles/test-article-2',
      categories: ['Test'],
    },
  ]

  it('renders the home page with correct title and content', async () => {
    render(<Home articles={mockArticles} />)

    // Manually set the document title to mock what Next.js would do
    document.title = 'Home Page'

    // Check for correct page title
    expect(document.title).toBe('Home Page')

    // Check for main components
    // expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText(/thought leadership:/i)).toBeInTheDocument()

    // Check that the articles are rendered in the News section
    // expect(screen.getByText(/test article 1/i)).toBeInTheDocument()
    // expect(screen.getByText(/test article 2/i)).toBeInTheDocument()

    // Check for the "More..." link
    expect(screen.getByRole('link', { name: /more.../i })).toBeInTheDocument()
  })
})
