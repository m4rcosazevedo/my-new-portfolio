import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard ({}: Props) {
  return (
    <article
      className="
        flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 max-w-full
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
      "
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&h=600&q=80"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO</h4>
        <p className="font-bold mt-1">MARCOS SOFTWORKS</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&h=600&q=80"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&h=600&q=80"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&h=600&q=80"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300 text-lg">Started work... - Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>

    </article>
  )
}
