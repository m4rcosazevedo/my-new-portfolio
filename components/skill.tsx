import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean
  lvl: number
}

export default function Skill ({ directionLeft, lvl }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 + (lvl * 0.2) }}
        className="
          rounded-full border border-gray-500 object-cover w-24 h-24
          xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out
        "
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
      />
      <div className="
        absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32
        rounded-full z-0
      ">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  )
}
