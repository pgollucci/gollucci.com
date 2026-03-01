import { render, screen } from '@testing-library/react'
import Article from '../src/components/Article'
import Footer from '../src/components/Footer'
import Profile from '../src/components/Profile'

describe('accessibility for links and images', () => {
  it('uses title as default alt text when alt is not provided', () => {
    render(
      <Article
        url="https://example.com/article"
        src="/example.jpg"
        title="Example Article"
        blurb="Example blurb"
        categories={['Example']}
      />,
    )

    expect(screen.getByRole('img', { name: 'Example Article' })).toBeInTheDocument()
  })

  it('adds safe external-link attributes in profile and footer', () => {
    const { container } = render(
      <>
        <Profile />
        <Footer />
      </>,
    )

    const externalLinks = container.querySelectorAll('a[target="_blank"]')
    expect(externalLinks.length).toBeGreaterThan(0)

    for (const link of externalLinks) {
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
      expect(link).toHaveAttribute('rel', expect.stringContaining('noreferrer'))
    }
  })
})
