import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import Link from 'next/link'
import Banner from '../components/Banner'
import News from '../components/News'
import Pitch from '../components/Pitch'
import Profile from '../components/Profile'
import type { ArticleProps } from '../components/Article'

interface HomeProps {
  articles: ArticleProps[]
}

export default function Home({ articles }: HomeProps) {
  return (
    <main className="flex flex-col items-center justify-between min-h-0 p-2">
      <Banner />
      <Profile />
      <Pitch />
      <p className="px-3 py-2 mb-4 text-xl font-medium rounded-md">Thought Leadership:</p>
      <News articles={articles} limit={4} />
      <Link href="/news" className="mt-8 text-2xl font-medium text-gray-600 rounded-md hover:bg-blue-300 hover:text-gray-900">More...</Link>
    </main>
  )
}

export async function getStaticProps() {
  const articlesPath = path.join(process.cwd(), 'content/articles.yml')
  const fileContents = fs.readFileSync(articlesPath, 'utf8')
  const articles = yaml.load(fileContents) as ArticleProps[]

  return {
    props: {
      articles: articles.slice(0, 100),
    },
  }
}
