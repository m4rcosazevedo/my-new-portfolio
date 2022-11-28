import { GetStaticProps, InferGetStaticPropsType } from "next"

import { sheets } from "../service/sheets-service"
import { About } from "../components/about/about"
import { Header } from "../components/header/header"
import { Hero } from "../components/hero/hero"
import { WorkExperience } from "../components/work-experience/work-experience"
import { Skills } from "../components/skills/skills"
import Contact from "../components/contact/contact"
import { Projects } from "../components/projects/projects"

type Props = {
  hero: Hero,
  about: About, 
  experiences: Experience[],
  skills: Skills,
  projects: Projects
  contact: Contact,
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const SECOND = 1
  const MINUTE = 60 * SECOND
  const HOUR = 60 * MINUTE
  const revalidateIn = HOUR * 5
  
  const hero = await sheets.hero()
  const about = await sheets.about()
  const experiences = await sheets.experiences()
  const skills = await sheets.skills()
  const projects = await sheets.projects()
  const contact = await sheets.contact()
  
  return {
    props: {
      hero,
      about,
      experiences,
      skills,
      projects,
      contact
    },
    revalidate: revalidateIn
  }
}

export default function Home (props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { hero, about, experiences, skills, projects, contact } = props


  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen z-0 snap-y
      snap-mandatory overflow-y-scroll overflow-x-hidden
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
    ">
      <div className="container mx-auto px-8">
        <Header />
        <Hero hero={hero} />
        <About about={about} />
        <WorkExperience experiences={experiences} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact contact={contact} />
      </div>
    </div>
  )
}
