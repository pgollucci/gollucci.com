import Head from 'next/head'
import About from '../components/About'

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>Philip M. Gollucci About</title>
      </Head>
      <main className="min-h-0 p-24">
        <div>
          <About />
        </div>
      </main>
    </>
  )
}
