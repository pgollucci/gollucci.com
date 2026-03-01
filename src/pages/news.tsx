import type { ArticleProps } from '../components/Article'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import yaml from 'js-yaml'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import News from '../components/News'
import { parseArticles } from '../lib/articles'

interface NewsPageProps {
  articles: ArticleProps[]
  limit?: number
}

function getCategoryFromQuery(value: string | string[] | undefined): string | undefined {
  if (!value) {
    return undefined
  }
  return Array.isArray(value) ? value[0] : value
}

export function filterArticlesByCategory(articles: ArticleProps[], category?: string): ArticleProps[] {
  if (!category) {
    return articles
  }

  return articles.filter(article =>
    article.categories.some(existingCategory =>
      existingCategory.toLocaleLowerCase() === category.toLocaleLowerCase(),
    ),
  )
}

function normalizeSelectedCategory(articles: ArticleProps[], category?: string): string | undefined {
  if (!category) {
    return undefined
  }

  for (const article of articles) {
    const matchedCategory = article.categories.find(existingCategory =>
      existingCategory.toLocaleLowerCase() === category.toLocaleLowerCase(),
    )
    if (matchedCategory) {
      return matchedCategory
    }
  }

  return category.toLocaleLowerCase()
}

export default function NewsPage({ articles, limit }: NewsPageProps) {
  const { query } = useRouter()
  const selectedCategory = getCategoryFromQuery(query.category)
  const normalizedCategory = normalizeSelectedCategory(articles, selectedCategory)
  const filteredArticles = filterArticlesByCategory(articles, selectedCategory)
  const title = normalizedCategory
    ? `Philip M. Gollucci's News (${normalizedCategory})`
    : 'Philip M. Gollucci\'s News'
  const description = normalizedCategory
    ? `Thought leadership articles filtered by ${normalizedCategory}.`
    : 'Thought leadership articles and media features from Philip M. Gollucci.'
  const canonical = normalizedCategory
    ? `https://www.gollucci.com/news?category=${encodeURIComponent(normalizedCategory)}`
    : 'https://www.gollucci.com/news'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.gollucci.com/pj.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.gollucci.com/pj.png" />
      </Head>
      <main className="flex min-h-0 flex-col items-center justify-between p-24">
        <div>
          {normalizedCategory && (
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-semibold">{`News: ${normalizedCategory}`}</h1>
              <Link className="underline" href="/news">Clear filter</Link>
            </div>
          )}
          {filteredArticles.length > 0
            ? <News articles={filteredArticles} limit={limit} />
            : (
                <div className="rounded border p-4 text-center">
                  <p>No articles found for this category.</p>
                  <Link className="underline" href="/news">View all news</Link>
                </div>
              )}
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const articlesPath = path.join(process.cwd(), 'content/articles.yml')
  const fileContents = fs.readFileSync(articlesPath, 'utf8')
  const articles = parseArticles(yaml.load(fileContents))

  return {
    props: {
      articles,
    },
  }
}
