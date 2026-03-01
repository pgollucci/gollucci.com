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
  const imageAlt = article.alt ?? article.title

  return (
    <div className="w-full overflow-hidden rounded-md px-2 py-2 shadow-lg">
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <div className="flex aspect-[5/3] w-full items-center justify-center bg-gray-100">
          <Image className="h-full w-full object-contain" src={article.src} alt={imageAlt} width={250} height={150} />
        </div>
      </a>
      <a href={article.url} className="block" target="_blank" rel="noopener noreferrer">
        <h3>{article.title}</h3>
        <p className="mt-2 text-base leading-6 text-gray-500">{article.blurb}</p>
      </a>
      <div className="mt-2 flex flex-wrap gap-2">
        {article.categories.map(category => (
          <span key={category} className="inline-flex items-center rounded-full bg-primary px-3 py-0.5 text-sm font-medium leading-5 text-bg-inverted">
            <Link href={{ pathname: '/news', query: { category } }}>
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
