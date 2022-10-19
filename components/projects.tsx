import { motion } from 'framer-motion'

type Props = {}

export default function Projects ({}: Props) {
  const projects = Array.from({ length: 5 }, (_, i) => i + 1)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
        h-screen relative flex overflow-hidden text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-0
      "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="
        relative w-full flex overflow-x-scroll
        overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
      ">
        {projects.map(project => (
          <div key={project} className="
            w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-20 md:p-44 h-screen
          ">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {project} of {projects.length}:
                </span>{' '}
                UPS Clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci suscipit nam velit obcaecati vitae necessitatibus,
                veritatis quidem voluptas veniam iusto omnis quasi vero
                atque minima ratione odit saepe voluptatum expedita.
                </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}
