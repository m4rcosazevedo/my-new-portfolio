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

import images from '../utils/images'

import { skillService } from '../service/skill-service'
import { aboutService } from '../service/about-service'

type Props = {
  skills?: Skills
  about?: About
}

const Home: NextPage = ({ skills, about }: Props) => {
  return (
    <div className="
      bg-[rgb(36,36,36)] text-white h-screen
      snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
    ">
      <Head>
        <title>Marcos Azevedo</title>
        <meta name="description" content="An awesome portfolio" />
      </Head>

      <div className="container mx-auto px-8">
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {about && (
          <section id="about" className="snap-center">
            <About about={about} />
          </section>
        )}

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
              src={images.buttonToTop}
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
  const about = await aboutService.me()  

  const SECOND = 1
  const MINUTE = 60 * SECOND
  const HOUR = 60 * MINUTE

  const revalidateIn = HOUR

  return {
    props: {
      skills,
      about
    },
    // revalidate: revalidateIn
  }
}
