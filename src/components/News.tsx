import fs from "fs";
import yaml from "js-yaml";
import path from "path";
import { ReactElement } from "react";
import Article, { ArticleProps } from "./Article";

const News = ({ limit }: { limit?: number }): ReactElement => {
  limit ||= 100
  const articles = loadArticles();

  return (
    <div className="grid max-w-lg gap-5 mx-auto mt-0 lg:grid-cols-4 lg:max-w-none">
      {
        articles.slice(0, limit).map((article: ArticleProps) => (
          <Article key={article.title} src={article.src} title={article.title} blurb={article.blurb} url={article.url} categories={article.categories} />
        ))
      }
    </div>
  )
}

export const loadArticles = () => {
  const articlesPath = path.join(process.cwd(), "content/articles.yml");
  const fileContents = fs.readFileSync(articlesPath, "utf8");
  const articles = yaml.load(fileContents) as ArticleProps[];
  // return {
    // props: {
return      articles
    // },
  // };
}

export default News;
