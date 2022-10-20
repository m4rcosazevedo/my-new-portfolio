import { motion } from 'framer-motion'
import ExperienceCard from './experience-card'
import { Title } from './ui'

type Props = {}

export default function WorkExperience ({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        h-screen flex relative overflow-hidden
        flex-col text-lft md:flex-row max-w-full
        px-10 justify-evenly mx-auto items-center
      "
    >
      <Title>Experience</Title>

      <div className="
        mt-28 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
      ">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}



