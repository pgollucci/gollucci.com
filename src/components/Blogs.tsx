import type { BlogProps } from './Blog'
import Blog from './Blog'

interface BlogsProps {
  blogs: BlogProps[]
  limit?: number
}

export default function Blogs({ blogs, limit }: BlogsProps) {
  return (
    <div className="">
      <ul>
        {blogs.slice(0, limit).map((blog: BlogProps) => (
          <li>
            <Blog
              title={blog.title}
              url={blog.url}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
