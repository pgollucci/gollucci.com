import type { ArticleProps } from '../components/Article'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import yaml from 'js-yaml'
import Head from 'next/head'
import News from '../components/News'

interface NewsPageProps {
  articles: ArticleProps[]
  limit?: number
}

export default function NewsPage({ articles, limit }: NewsPageProps) {
  return (
    <>
      <Head>
        <title>Philip M. Gollucci's News</title>
      </Head>
      <main className="flex min-h-0 flex-col items-center justify-between p-24">
        <div>
          <News articles={articles} limit={limit} />
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const articlesPath = path.join(process.cwd(), 'content/articles.yml')
  const fileContents = fs.readFileSync(articlesPath, 'utf8')
  const articles = yaml.load(fileContents) as ArticleProps[]

  return {
    props: {
      articles,
    },
  }
}
