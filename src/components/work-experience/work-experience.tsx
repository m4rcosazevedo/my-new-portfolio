import { Section } from "../ui"

type Props = {
  experiences: Experience[]
}

export function WorkExperience ({ experiences }: Props) {
  return (
    <Section id="experience" className="snap-start" title="Experience">
      <div className="
      w-full flex bg-gray-600 pt-4 pb-8 px-2 rounded-2xl overflow-x-scroll
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
      ">
        {experiences.map((experience, index) => (
          <div key={index} className="
            flex flex-col rounded-lg item-center max-w-full flex-shrink-0 mx-2
            md:w-[520px]
            bg-[#292929] overflow-hidden
          ">
            {!!experience.logo && (
              <img
                // initial={{ y: -100, opacity: 0 }}
                // whileInView={{ y: 0, opacity: 1 }}
                // transition={{ duration: 1.2 }}
                // viewport={{ once: true }}
                className="max-w-full object-cover rounded-full h-32 w-32 mx-auto my-4"
                src={experience.logo}
                alt=""
              />
            )}
            <div className="p-4">
              <h4 className="uppercase text-center text-lg tracking-[2px]">{experience.office}</h4>
              <h5 className="text-gray-300 text-md text-center">{experience.company}</h5>

              <p className="text-gray-300 text-xs text-center">{experience.period}</p>

              <div className="flex mt-4">
                {experience.skills.map(skill => (
                  <img
                    key={skill}
                    className="s-avatar"
                    src={`https://skillicons.dev/icons?i=${skill}`}
                    alt={skill}
                    title={skill.toUpperCase()}
                  />
                ))}
              </div>

              <ul className="list-disc ml-5 text-sm mt-4 space-y-2 tracking-[1px]">
                {experience.activities.map(activity => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
