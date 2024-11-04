import type { ArticleProps } from '../components/Article'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import yaml from 'js-yaml'
import Head from 'next/head'
import Blogs from '../components/Blogs'

interface BlogsPageProps {
  blogs: ArticleProps[]
  limit?: number
}

export default function BlogsPage({ blogs, limit }: BlogsPageProps) {
  return (
    <>
      <Head>
        <title>Philip M. Gollucci's Blogs</title>
      </Head>
      <main className="flex min-h-0 flex-col items-center justify-between p-24">
        <div>
          <Blogs blogs={blogs} limit={limit} />
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const blogsPath = path.join(process.cwd(), 'content/blogs.yml')
  const fileContents = fs.readFileSync(blogsPath, 'utf8')
  const blogs = yaml.load(fileContents) as ArticleProps[]

  return {
    props: {
      blogs,
    },
  }
}
