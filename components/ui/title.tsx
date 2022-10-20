import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export default function Title ({ children, className }: Props) {
  const classes = [
    "text-gray-500 uppercase tracking-[20px] text-2xl absolute top-24",
    (className && className)
  ].filter(i => i).join(' ')

  return (
    <h3 className={classes}>
      {children}
    </h3>
  )
}
