import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
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
import { sheets } from '../service/sheets-service'

export async function getStaticProps({}: GetStaticPropsContext) {
  const skills = await skillService.all()

  // const SECOND = 1
  // const MINUTE = 60 * SECOND
  // const HOUR = 60 * MINUTE

  // const revalidateIn = HOUR

  const about = await sheets.about()
  const contact = await sheets.contact()
  const experiences = await sheets.experiences()
  const hero = await sheets.hero()
  const projects = await sheets.projects()

  return {
    props: {
      skills,
      about,
      contact,
      experiences,
      hero,
      projects
    },
    // revalidate: 1
    // revalidate: revalidateIn
  }
}

export default function Home (props: InferGetStaticPropsType<typeof getStaticProps>) {
/*   const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) return <>Carregando...</> */

  const { skills, about, contact, experiences, hero, projects } = props

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

        {!!hero && (
          <section id="hero" className="snap-start">
            <Hero hero={hero}/>
          </section>
        )}

        {about && (
          <section id="about" className="snap-center">
            <About about={about} />
          </section>
        )}

        {!!experiences && (
          <section id="experience" className="snap-center">
            <WorkExperience experiences={experiences} />
          </section>
        )}

        {!!skills && (
          <section id="skills" className="snap-start">
            <Skills skills={skills} />
          </section>
        )}

        {!!projects && (
          <section id="projects" className="snap-start">
            <Projects projects={projects} />
          </section>
        )}

        {!!contact && (
          <section id="contact" className="snap-start">
            <ContactMe contact={contact} />
          </section>
        )}
      </div>

      <Link href="#hero">
        <footer className="sticky bottom-5 mx-auto w-10 cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://iili.io/mQAept.png"
              alt=""
            />
          </div>
        </footer>
      </Link>

    </div>
  )
}
