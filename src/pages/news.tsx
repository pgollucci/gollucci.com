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

export default function NewsPage({ articles, limit }: NewsPageProps) {
  const { query } = useRouter()
  const selectedCategory = getCategoryFromQuery(query.category)
  const filteredArticles = filterArticlesByCategory(articles, selectedCategory)
  const titleSuffix = selectedCategory ? ` (${selectedCategory})` : ''

  return (
    <>
      <Head>
        <title>{`Philip M. Gollucci's News${titleSuffix}`}</title>
      </Head>
      <main className="flex min-h-0 flex-col items-center justify-between p-24">
        <div>
          {selectedCategory && (
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-semibold">{`News: ${selectedCategory}`}</h1>
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
