import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Title } from './ui'

type Props = {
  projects: Projects
}

export default function Projects ({ projects }: Props) {
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
      <Title>Projects</Title>

      <div className="
        relative w-full flex overflow-x-scroll
        overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
      ">
        {projects?.map((project, index) => (
          <div key={index.toString()} className="
            w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-20 md:p-44 h-screen
          ">
            {!!project?.image && (
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                src={project.image}
                className="object-cover h-60"
                alt=""
              />
            )}

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{' '}
                {project?.project}
              </h4>

              <p className="text-lg text-center md:text-left">{project?.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}
