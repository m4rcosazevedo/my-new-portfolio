import { motion } from 'framer-motion'
import { Title } from './ui'

type Props = {
  about: About
}

export default function About ({ about }: Props) {
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
        src={about.image}
        className="
          -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
          object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]
        "
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold" dangerouslySetInnerHTML={{ __html: about.title }} />
        <p className="text-base">{about.description}</p>
      </div>
    </motion.div>
  )
}
