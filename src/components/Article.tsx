import type { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface ArticleProps {
  url: string
  src: string
  alt?: string
  title: string
  blurb: string
  categories: string[]
}

function Article(article: ArticleProps): ReactElement {
  return (
    <div className="px-2 py-2 shadow-lg sm:w-full">
      <a href={article.url}><Image className="h-52" src={article.src} alt="" width={250} height={150} /></a>
      <a href={article.url} className="block">
        <h3>{article.title}</h3>
        <p className="mt-2 text-base leading-6 text-gray-500">{article.blurb}</p>
      </a>
      <div className="mt-2">
        {article.categories.map(category => (
          <span key={category} className="mr-2 inline-flex items-center rounded-full bg-primary px-3 py-0.5 text-sm font-medium leading-5 text-bg-inverted">
            <Link href={`/news?category=${category}`}>
              {category}
            </Link>
          </span>
        ),
        )}
      </div>
    </div>
  )
}

export default Article
