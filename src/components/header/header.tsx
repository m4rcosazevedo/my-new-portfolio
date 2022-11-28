import { SocialIcon, SocialIconProps } from  'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

const socials = [
  "https://linkedin.com/in/marcospca",
  "https://instagram.com/marcospca",
  "https://github.com/m4rcosazevedo"
]

const motionLeft = {
  className: "flex flex-row items-center",
  initial: {
    x: -500,
    opacity: 0,
    scale: 0.5
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  transition: {
    duration: 1
  }
}

const motionRight = {
  ...motionLeft,
  initial: {
    x: 500,
    opacity: 0,
    scale: 0.5
  },
}

const Icon = (props: SocialIconProps) => (
  <SocialIcon fgColor="gray" bgColor="transparent" {...props} />
)

export function Header () {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div {...motionLeft}>
        {socials.map(social => (
          <Icon key={social} url={social} target="_blank" />
        ))}
      </motion.div>

      <Link href="#contact" className="text-gray-300 cursor-pointer">
        <motion.div {...motionRight}>
          <Icon className="cursor-pointer" network="email" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">get in touch</p>
        </motion.div>
      </Link>
    </header>
  )
}
