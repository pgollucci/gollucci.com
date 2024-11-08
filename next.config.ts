import type { NextConfig } from 'next'
import withMDX from '@next/mdx'

const mdx = withMDX({
  extension: /\.mdx?$/,
})

const config: NextConfig = mdx({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    unoptimized: true,
  },
  output: 'export',
})

export default config
