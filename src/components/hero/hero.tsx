import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import Link from 'next/link'

import BackgroundCircles from './background-circles'
import { Section } from '../ui'

type Props = {
  hero: Hero
}

const motionDiv = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  transition: {
    duration: 2
  }
}

const menus = [
  { href: '#about',       title: 'About' },
  { href: '#experience',  title: 'Experience' },
  { href: '#skills',      title: 'Skills' },
  { href: '#projects',    title: 'Projects' },
]

export function Hero({ hero }: Props) {
  const [text] = useTypewriter({
    words: hero.writing ?? [],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <Section id="hero" className="snap-start">
      <div className="space-y-8 text-center">
        <BackgroundCircles />

        <motion.div {...motionDiv} className="relative">
          <div className="liquid-drops">
            <div className="liquid-drop w-[90px] h-[16px] bottom-0 rounded-none" />
            <div className="liquid-drop drop2" />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="liquid">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
              </filter>
            </defs>
          </svg>

          <img src={hero.avatar} alt="" className="absolute rounded-full w-32 h-32 mx-auto object-cover left-1/2 -ml-16 top-0 z-10" />
        </motion.div>

        <div className="relative z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{hero.office}</h2>

          <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>

          <div className="pt-5">
            {menus.map(({ href, title }) => (
              <Link href={href} key={href} scroll>
                <button className="heroButton">{title}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
