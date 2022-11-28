import { ReactNode } from "react"

type Props = {
  id: string
  children: ReactNode
  title?: string
  className?: string
}

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="text-gray-500 uppercase tracking-[20px] text-2xl text-center mb-8">
      {children}
    </h3>
  )
}

export default function Section ({ id, className, children, title }: Props) {
  return (
    <section {...{ id, className }}>
      <div className="min-h-screen relative flex flex-col justify-center">
        <Title>{title}</Title>
        
        {children}
      </div>
    </section>
  )
}
