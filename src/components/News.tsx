import type { ArticleProps } from './Article'
import Article from './Article'

interface NewsProps {
  articles: ArticleProps[]
  limit?: number
}

export default function News({ articles, limit }: NewsProps) {
  return (
    <div className="mx-auto mt-0 grid w-full max-w-lg grid-cols-1 gap-5 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
      {articles.slice(0, limit).map((article: ArticleProps) => (
        <Article
          key={article.title}
          src={article.src}
          title={article.title}
          blurb={article.blurb}
          url={article.url}
          categories={article.categories}
        />
      ))}
    </div>
  )
}
