import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Marcos Azevedo</title>
        <meta name="description" content="An awesome portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}

export default Home
