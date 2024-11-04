import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import '../styles/global.css'

const inter = Inter({ subsets: ['latin'] })

const components = {
  a: (props: any) => <a className="mdx-a" {...props} />,
  abbr: (props: any) => <abbr className="mdx-abbr" {...props} />,
  address: (props: any) => <address className="mdx-address" {...props} />,
  area: (props: any) => <area className="mdx-area" {...props} />,
  article: (props: any) => <article className="mdx-article" {...props} />,
  aside: (props: any) => <aside className="mdx-aside" {...props} />,
  audio: (props: any) => <audio className="mdx-audio" {...props} />,
  b: (props: any) => <b className="mdx-b" {...props} />,
  base: (props: any) => <base className="mdx-base" {...props} />,
  bdi: (props: any) => <bdi className="mdx-bdi" {...props} />,
  bdo: (props: any) => <bdo className="mdx-bdo" {...props} />,
  blockquote: (props: any) => <blockquote className="mdx-blockquote" {...props} />,
  body: (props: any) => <body className="mdx-body" {...props} />,
  br: (props: any) => <br className="mdx-br" {...props} />,
  button: (props: any) => <button className="mdx-button" {...props} />,
  canvas: (props: any) => <canvas className="mdx-canvas" {...props} />,
  caption: (props: any) => <caption className="mdx-caption" {...props} />,
  cite: (props: any) => <cite className="mdx-cite" {...props} />,
  code: (props: any) => <code className="mdx-code" {...props} />,
  col: (props: any) => <col className="mdx-col" {...props} />,
  colgroup: (props: any) => <colgroup className="mdx-colgroup" {...props} />,
  data: (props: any) => <data className="mdx-data" {...props} />,
  datalist: (props: any) => <datalist className="mdx-datalist" {...props} />,
  dd: (props: any) => <dd className="mdx-dd" {...props} />,
  del: (props: any) => <del className="mdx-del" {...props} />,
  details: (props: any) => <details className="mdx-details" {...props} />,
  dfn: (props: any) => <dfn className="mdx-dfn" {...props} />,
  dialog: (props: any) => <dialog className="mdx-dialog" {...props} />,
  div: (props: any) => <div className="mdx-div" {...props} />,
  dl: (props: any) => <dl className="mdx-dl" {...props} />,
  dt: (props: any) => <dt className="mdx-dt" {...props} />,
  em: (props: any) => <em className="mdx-em" {...props} />,
  embed: (props: any) => <embed className="mdx-embed" {...props} />,
  fieldset: (props: any) => <fieldset className="mdx-fieldset" {...props} />,
  figcaption: (props: any) => <figcaption className="mdx-figcaption" {...props} />,
  figure: (props: any) => <figure className="mdx-figure" {...props} />,
  footer: (props: any) => <footer className="mdx-footer" {...props} />,
  form: (props: any) => <form className="mdx-form" {...props} />,
  h1: (props: any) => <h1 className="mdx-h1" {...props} />,
  h2: (props: any) => <h2 className="mdx-h2" {...props} />,
  h3: (props: any) => <h3 className="mdx-h3" {...props} />,
  h4: (props: any) => <h4 className="mdx-h4" {...props} />,
  h5: (props: any) => <h5 className="mdx-h5" {...props} />,
  h6: (props: any) => <h6 className="mdx-h6" {...props} />,
  head: (props: any) => <head className="mdx-head" {...props} />,
  header: (props: any) => <header className="mdx-header" {...props} />,
  hgroup: (props: any) => <hgroup className="mdx-hgroup" {...props} />,
  hr: (props: any) => <hr className="mdx-hr" {...props} />,
  html: (props: any) => <html className="mdx-html" {...props} />,
  i: (props: any) => <i className="mdx-i" {...props} />,
  iframe: (props: any) => <iframe className="mdx-iframe" {...props} />,
  img: (props: any) => <img className="mdx-img" {...props} />,
  input: (props: any) => <input className="mdx-input" {...props} />,
  ins: (props: any) => <ins className="mdx-ins" {...props} />,
  kbd: (props: any) => <kbd className="mdx-kbd" {...props} />,
  label: (props: any) => <label className="mdx-label" {...props} />,
  legend: (props: any) => <legend className="mdx-legend" {...props} />,
  li: (props: any) => <li className="mdx-li" {...props} />,
  link: (props: any) => <link className="mdx-link" {...props} />,
  main: (props: any) => <main className="mdx-main" {...props} />,
  map: (props: any) => <map className="mdx-map" {...props} />,
  mark: (props: any) => <mark className="mdx-mark" {...props} />,
  menu: (props: any) => <menu className="mdx-menu" {...props} />,
  meta: (props: any) => <meta className="mdx-meta" {...props} />,
  meter: (props: any) => <meter className="mdx-meter" {...props} />,
  nav: (props: any) => <nav className="mdx-nav" {...props} />,
  noscript: (props: any) => <noscript className="mdx-noscript" {...props} />,
  object: (props: any) => <object className="mdx-object" {...props} />,
  ol: (props: any) => <ol className="mdx-ol" {...props} />,
  optgroup: (props: any) => <optgroup className="mdx-optgroup" {...props} />,
  option: (props: any) => <option className="mdx-option" {...props} />,
  output: (props: any) => <output className="mdx-output" {...props} />,
  p: (props: any) => <p className="mdx-p" {...props} />,
  picture: (props: any) => <picture className="mdx-picture" {...props} />,
  pre: (props: any) => <pre className="mdx-pre" {...props} />,
  progress: (props: any) => <progress className="mdx-progress" {...props} />,
  q: (props: any) => <q className="mdx-q" {...props} />,
  rp: (props: any) => <rp className="mdx-rp" {...props} />,
  rt: (props: any) => <rt className="mdx-rt" {...props} />,
  ruby: (props: any) => <ruby className="mdx-ruby" {...props} />,
  s: (props: any) => <s className="mdx-s" {...props} />,
  samp: (props: any) => <samp className="mdx-samp" {...props} />,
  script: (props: any) => <script className="mdx-script" {...props} />,
  section: (props: any) => <section className="mdx-section" {...props} />,
  select: (props: any) => <select className="mdx-select" {...props} />,
  small: (props: any) => <small className="mdx-small" {...props} />,
  source: (props: any) => <source className="mdx-source" {...props} />,
  span: (props: any) => <span className="mdx-span" {...props} />,
  strong: (props: any) => <strong className="mdx-strong" {...props} />,
  style: (props: any) => <style className="mdx-style" {...props} />,
  sub: (props: any) => <sub className="mdx-sub" {...props} />,
  summary: (props: any) => <summary className="mdx-summary" {...props} />,
  sup: (props: any) => <sup className="mdx-sup" {...props} />,
  table: (props: any) => <table className="mdx-table" {...props} />,
  tbody: (props: any) => <tbody className="mdx-tbody" {...props} />,
  td: (props: any) => <td className="mdx-td" {...props} />,
  template: (props: any) => <template className="mdx-template" {...props} />,
  textarea: (props: any) => <textarea className="mdx-textarea" {...props} />,
  tfoot: (props: any) => <tfoot className="mdx-tfoot" {...props} />,
  th: (props: any) => <th className="mdx-th" {...props} />,
  thead: (props: any) => <thead className="mdx-thead" {...props} />,
  time: (props: any) => <time className="mdx-time" {...props} />,
  title: (props: any) => <title className="mdx-title" {...props} />,
  tr: (props: any) => <tr className="mdx-tr" {...props} />,
  track: (props: any) => <track className="mdx-track" {...props} />,
  u: (props: any) => <u className="mdx-u" {...props} />,
  ul: (props: any) => <ul className="mdx-ul" {...props} />,
  var: (props: any) => <var className="mdx-var" {...props} />,
  video: (props: any) => <video className="mdx-video" {...props} />,
  wbr: (props: any) => <wbr className="mdx-wbr" {...props} />,
  wrapper: (props: any) => <div className="mdx-wrapper" {...props} />,
}

export default function App({ Component, pageProps }: AppProps) {
  const isMDX = pageProps.isMDX || false

  const content = isMDX
    ? (
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      )
    : (
        <Component {...pageProps} />
      )

  return (
    <main className={inter.className}>
      <Nav />
      {content}
      <Footer />
    </main>
  )
}
