import { parseArticles } from '../src/lib/articles'

describe('parseArticles', () => {
  it('parses valid article entries', () => {
    const articles = parseArticles([
      {
        url: 'https://example.com',
        src: '/image.jpg',
        title: 'Example',
        blurb: 'Blurb',
        categories: ['AI', 'Cloud'],
      },
    ])

    expect(articles).toHaveLength(1)
    expect(articles[0].title).toBe('Example')
    expect(articles[0].categories).toEqual(['AI', 'Cloud'])
  })

  it('throws for invalid categories shape', () => {
    expect(() =>
      parseArticles([
        {
          url: 'https://example.com',
          src: '/image.jpg',
          title: 'Example',
          blurb: 'Blurb',
          categories: 'AI',
        },
      ]),
    ).toThrow('"categories" must be an array of strings')
  })

  it('throws for non-array root', () => {
    expect(() => parseArticles({})).toThrow('root value must be an array')
  })
})
