import { motion } from 'framer-motion'
import { Title } from './ui'

type Props = {}

const aboutMe = `
  I'm Marcos.
  💛 You might also know me as PCA! I've been coding for over 15 years now.
  As a Full Stack developer I've worked both with startups and large corporations
  to help build & scale their companies. Along the journey I realised my passion existed in helping others excel and pursue the is dreams as upcoming developers.
`

export default function About ({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        relative h-screen flex flex-col text-center
        md:text-left md:flex-row max-w-7x px-10
        justify-evenly mx-auto items-center
      "
    >
      <Title>About</Title>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://ca.slack-edge.com/T01AWAX48KB-U0279EJ9PGC-15d46afb1ff0-512"
        className="
          -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
          object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]
        "
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background</h4>
        <p className="text-base">{aboutMe}</p>
      </div>
    </motion.div>
  )
}
