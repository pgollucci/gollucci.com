import Image from 'next/image';
import { ReactElement } from 'react';

export interface ArticleProps {
  url: string,
  src: string,
  alt?: string,
  title: string,
  blurb: string,
  categories: string[],
}

const Article = (article: ArticleProps): ReactElement => {
  return (
    <div className="flex flex-col w-full overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0 h-32 ml-20">
        <a href={article.url}><Image className="h-48" src={article.src} alt="" width={250} height={150} /></a>
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <a href={article.url} className="block">
            <h3 className="prose-lg">{article.title}</h3>
            <p className="mt-2 text-base leading-6 text-gray-500">{article.blurb}</p>
          </a>
        </div>
        {<div className="mt-2">
            {article.categories.map(category =>
              <span key={category} className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-indigo-100 text-indigo-800 mr-2">
                {category}
              </span>)}
          </div>}
        </div>
      </div>
    )
};

export default Article;