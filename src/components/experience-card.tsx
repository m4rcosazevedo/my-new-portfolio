import { motion } from 'framer-motion'

type Props = {
  experience: Experience
}

export default function ExperienceCard ({ experience }: Props) {

  if (!experience) return null

  return (
    <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 max-w-full
      w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
      opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      
      {!!experience?.logo && (
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={experience.logo}
          alt=""
        />
      )}

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light uppercase">{experience.office}</h4>

        <p className="font-bold mt-1 uppercase">{experience.company}</p>

        <div className="flex space-x-2 my-2">
          {experience.skills.map(skill => (
            <img
              key={skill}
              className="h-10 w-10 rounded-full"
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
            />
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300 text-lg">{experience.period}</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.activities.map(activity => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>

      </div>
    </div>
  )
}
