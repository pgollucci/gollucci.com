import type { ComponentPropsWithoutRef, JSX } from 'react'

type IntrinsicElement = keyof JSX.IntrinsicElements
type MdxComponentMap = Partial<{
  [K in IntrinsicElement]: (props: ComponentPropsWithoutRef<K>) => JSX.Element
}>

const mdxComponents = {
  a: (props: ComponentPropsWithoutRef<'a'>) => <a className="mdx-a" {...props} />,
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => <blockquote className="mdx-blockquote" {...props} />,
  code: (props: ComponentPropsWithoutRef<'code'>) => <code className="mdx-code" {...props} />,
  h1: (props: ComponentPropsWithoutRef<'h1'>) => <h1 className="mdx-h1" {...props} />,
  h2: (props: ComponentPropsWithoutRef<'h2'>) => <h2 className="mdx-h2" {...props} />,
  h3: (props: ComponentPropsWithoutRef<'h3'>) => <h3 className="mdx-h3" {...props} />,
  h4: (props: ComponentPropsWithoutRef<'h4'>) => <h4 className="mdx-h4" {...props} />,
  h5: (props: ComponentPropsWithoutRef<'h5'>) => <h5 className="mdx-h5" {...props} />,
  h6: (props: ComponentPropsWithoutRef<'h6'>) => <h6 className="mdx-h6" {...props} />,
  li: (props: ComponentPropsWithoutRef<'li'>) => <li className="mdx-li" {...props} />,
  ol: (props: ComponentPropsWithoutRef<'ol'>) => <ol className="mdx-ol" {...props} />,
  p: (props: ComponentPropsWithoutRef<'p'>) => <p className="mdx-p" {...props} />,
  pre: (props: ComponentPropsWithoutRef<'pre'>) => <pre className="mdx-pre" {...props} />,
  ul: (props: ComponentPropsWithoutRef<'ul'>) => <ul className="mdx-ul" {...props} />,
} satisfies MdxComponentMap

export function getMdxComponents(): MdxComponentMap {
  return mdxComponents
}
