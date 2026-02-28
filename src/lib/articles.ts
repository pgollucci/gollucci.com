import type { ArticleProps } from '../components/Article'

function ensureStringArray(value: unknown, field: string, index: number): string[] {
  if (!Array.isArray(value) || value.some(item => typeof item !== 'string')) {
    throw new Error(`Invalid articles.yml entry at index ${index}: "${field}" must be an array of strings`)
  }
  return value
}

function ensureString(value: unknown, field: string, index: number): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Invalid articles.yml entry at index ${index}: "${field}" must be a non-empty string`)
  }
  return value
}

export function parseArticles(input: unknown): ArticleProps[] {
  if (!Array.isArray(input)) {
    throw new TypeError('Invalid articles.yml: root value must be an array')
  }

  return input.map((entry, index) => {
    if (!entry || typeof entry !== 'object') {
      throw new Error(`Invalid articles.yml entry at index ${index}: entry must be an object`)
    }

    const article = entry as Record<string, unknown>

    return {
      url: ensureString(article.url, 'url', index),
      src: ensureString(article.src, 'src', index),
      title: ensureString(article.title, 'title', index),
      blurb: ensureString(article.blurb, 'blurb', index),
      categories: ensureStringArray(article.categories, 'categories', index),
      ...(typeof article.alt === 'string' && article.alt.trim().length > 0 ? { alt: article.alt } : {}),
    }
  })
}
