import { Section } from "../ui"

type Props = {
  skills: Skills
}

export function Skills ({ skills }: Props) {
  return (
    <Section id="skills" className="snap-start" title="Skills">
      <div className="w-full max-w-7x mx-auto text-center">
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm mb-10">
          Hover over a skill for currency proficiency
        </h3>

        <div className="w-full max-w-7x mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills?.map(skill => (
            <div key={skill.image} className="group flex items-center">
              <img
                className="
                  rounded-full border border-gray-500 object-cover h-8 w-8
                  filter group-hover:grayscale transition duration-300 ease-in-out mr-2"
                src={`https://skillicons.dev/icons?i=${skill.image}`}
                alt=""
              />
              <div className="w-full bg-gray-700 rounded-full h-6">
                <div
                  className="h-6 bg-[#F7AB0A] text-gray-700 font-bold rounded-full"
                  style={{
                    width: `${skill.level}%`
                  }}
                >{skill.level}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}