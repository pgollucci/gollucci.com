import Head from 'next/head'
import About from '../components/About'

export default function AboutMe() {
  const title = 'Philip M. Gollucci About'
  const description = 'Background, leadership milestones, and community impact highlights from Philip M. Gollucci.'
  const canonical = 'https://www.gollucci.com/about'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://www.gollucci.com/me.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.gollucci.com/me.jpg" />
      </Head>
      <main className="min-h-0 p-24">
        <div>
          <About />
        </div>
      </main>
    </>
  )
}
