import { motion } from "framer-motion"
import { Section } from "../ui"

type Props = {
  about: About
}

const motionImage = {
  initial: {
    x: -200,
    opacity: 0
  },
  transition: {
    duration: 1.2
  },
  whileInView: {
    x: 0,
    opacity: 1
  },
  viewport: {
    once: true
  }
}

export function About ({ about }: Props) {
  return (
    <Section id="about" className="snap-center" title="About">
      <div className="
        text-center max-w-7x px-10 mx-auto
        flex flex-col justify-evenly items-center
        md:flex-row md:text-left
      ">
        <motion.img {...motionImage}
          src={about.image}
          className="
            mb-4 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full
            object-cover md:rounded-lg md:w-64 md:h-72 lg:w-[300px] lg:h-[400px]
          "
        />
        <div className="space-y-5 lg:space-y-10 px-0 md:px-10">
          <h4 className="text-2xl lg:text-4xl font-semibold" dangerouslySetInnerHTML={{ __html: about.title }} />
          <p className="text-base">{about.description}</p>
        </div>
      </div>
    </Section>
  )
}
