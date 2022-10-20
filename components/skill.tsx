import { motion } from 'framer-motion'

type Props = {
  skill: Skill
  directionLeft?: boolean
  lvl: number
}

export default function Skill ({ directionLeft, lvl, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ y: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 + (lvl * 0.2) }}
        className="
          rounded-full border border-gray-500 object-cover
          h-10 w-10 md:w-14 md:h-14 xl:w-20 xl:h-20
          filter group-hover:grayscale transition duration-300 ease-in-out
        "
        src={skill.image}
      />
      <div className="
        absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white
        h-10 w-10 md:w-14 md:h-14 xl:w-20 xl:h-20
        rounded-full z-0
      ">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">{skill.level}%</p>
        </div>
      </div>
    </div>
  )
}
