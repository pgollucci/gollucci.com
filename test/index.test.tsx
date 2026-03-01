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

  it('renders the home page with article content and navigation link', () => {
    render(<Home articles={mockArticles} />)

    expect(document.title).toBe('Philip M. Gollucci')
    const description = document.querySelector('meta[name="description"]')
    const canonical = document.querySelector('link[rel="canonical"]')
    expect(description).toHaveAttribute(
      'content',
      'Executive technology leadership, thought leadership, and engineering insights from Philip M. Gollucci.',
    )
    expect(canonical).toHaveAttribute('href', 'https://www.gollucci.com/')

    expect(screen.getByText(/thought leadership:/i)).toBeInTheDocument()
    expect(screen.getByText('Test Article 1')).toBeInTheDocument()
    expect(screen.getByText('Test Article 2')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /more.../i })).toBeInTheDocument()
  })
})
