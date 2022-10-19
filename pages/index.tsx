import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Header from '../components/header'
import Hero from '../components/hero'
import WorkExperience from '../components/work-experience'
import Skills from '../components/skills'
import Projects from '../components/projects'
import ContactMe from '../components/contact-me'

const Home: NextPage = () => {
  return (
    <div className="
      bg-[rgb(36,36,36)] text-white h-screen
      snap-y snap-mandatory overflow-scroll z-0
    ">
      <Head>
        <title>Marcos Azevedo</title>
        <meta name="description" content="An awesome portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

    </div>
  )
}

export default Home
