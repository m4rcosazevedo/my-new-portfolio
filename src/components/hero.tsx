import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './background-circles'

type Props = {
  hero: Hero
}

export default function Hero({ hero }: Props) {
  const [text] = useTypewriter({
    words: hero?.writing ?? [],
    loop: true,
    delaySpeed: 2000
  })

  if (!hero) return null

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
     
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative rounded-full w-32 h-32 mx-auto object-cover"
        src={hero.avatar} alt=""
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {hero.office}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>

        </div>
      </div>
    </div>
  )
}