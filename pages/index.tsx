import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import About from '../components/about'
import Header from '../components/header'
import Hero from '../components/hero'
import WorkExperience from '../components/work-experience'
import Skills from '../components/skills'
import Projects from '../components/projects'
import ContactMe from '../components/contact-me'
import Link from 'next/link'

import { skillService } from '../service/skill-service'

type Props = {
  skills?: Skills
}

const Home: NextPage = ({ skills }: Props) => {
  return (
    <div className="
      bg-[rgb(36,36,36)] text-white h-screen
      snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
    ">
      <Head>
        <title>Marcos Azevedo</title>
        <meta name="description" content="An awesome portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-8">
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

        {skills && (
          <section id="skills" className="snap-start">
            <Skills skills={skills} />
          </section>
        )}

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
      </div>

      <Link href="#hero">
        <footer className="sticky bottom-5 mx-auto w-10 cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://i.imgur.com/e2yvD6A.png"
              alt=""
            />
          </div>
        </footer>
      </Link>

    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const skills = await skillService.all()
  console.log(skills);
  
  return {
    props: {
      skills
    }
  }
}
