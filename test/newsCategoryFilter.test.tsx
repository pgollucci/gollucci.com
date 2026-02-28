import type { ArticleProps } from '../src/components/Article'
import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'
import NewsPage, { filterArticlesByCategory } from '../src/pages/news'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))

const mockUseRouter = useRouter as jest.Mock

const mockArticles: ArticleProps[] = [
  {
    title: 'Article One',
    src: '/a.jpg',
    blurb: 'A',
    url: 'https://example.com/a',
    categories: ['AI', 'Leadership'],
  },
  {
    title: 'Article Two',
    src: '/b.jpg',
    blurb: 'B',
    url: 'https://example.com/b',
    categories: ['Hiring'],
  },
]

describe('filterArticlesByCategory', () => {
  it('returns all articles when no category is supplied', () => {
    expect(filterArticlesByCategory(mockArticles)).toHaveLength(2)
  })

  it('filters case-insensitively by category', () => {
    const filtered = filterArticlesByCategory(mockArticles, 'ai')
    expect(filtered).toHaveLength(1)
    expect(filtered[0].title).toBe('Article One')
  })
})

describe('news page category query behavior', () => {
  it('shows empty-state when category has no matches', () => {
    mockUseRouter.mockReturnValue({ query: { category: 'Missing' } })
    render(<NewsPage articles={mockArticles} />)

    expect(screen.getByText('No articles found for this category.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view all news/i })).toBeInTheDocument()
  })
})
