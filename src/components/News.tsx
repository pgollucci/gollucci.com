import type { ArticleProps } from './Article'
import Article from './Article'

interface NewsProps {
  articles: ArticleProps[]
  limit?: number
}

export default function News({ articles, limit }: NewsProps) {
  return (
    <div className="mx-auto mt-0 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4">
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
