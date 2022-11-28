import { Section } from "../ui"

type Props = {
  projects: Projects
}

export function Projects ({ projects }: Props) { 
  return (
    <Section id="projects" className="snap-start" title="Projects">
      <div className="w-full flex flex-nowrap gap-4 bg-gray-600 pt-4 pb-8 px-2 rounded-2xl overflow-x-scroll
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, index) => (
          <div key={String(index)} className="relative flex-shrink-0 rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3 ">
            <img src={project.image} alt="" className="h-60 rounded-lg w-full object-cover" />
            <div className="bg-gray-alpha p-4 absolute z-10 rounded-lg inset-0 opacity-0 hover:opacity-100 backdrop-blur-sm flex flex-col align-middle justify-center transition-opacity">
              <h3 className="text-2xl font-semibold mb-1">
                {project.project}
              </h3>
              <div className="text-sm">
                {project.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
