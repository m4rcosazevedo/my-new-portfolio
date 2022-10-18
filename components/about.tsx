import { motion } from 'framer-motion'

type Props = {}

const aboutMe = "I'm Marcos. 💛 You might also know me as Marcos Azevedo! I'll be your coach & mentor inside the Arnia, here's a little bit about me... I've been coding for over 15 years now. As a Full Stack developer I've worked both with startups and large corporations to help build & scale their companies. Along the journey I realised my passion existed in helping others excel and pursue theis dreams as upcoming developers."

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
      <h3 className="text-gray-500 absolute top-24 uppercase tracking-[20px] text-2xl">About</h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&h=600&q=80"
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
