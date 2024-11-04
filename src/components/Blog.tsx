import type { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface BlogProps {
  url: string
  title: string
}

function Blog(blog: BlogProps): ReactElement {
  return (
    <Link href={blog.url} passHref>
      {blog.title}
    </Link>
  )
}

export default Blog
