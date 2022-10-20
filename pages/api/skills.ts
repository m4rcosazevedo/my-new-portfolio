import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  image: string
  level: number
}[]

const skills = [
  { image: 'https://skillicons.dev/icons?i=html', level: 100 },
  { image: 'https://skillicons.dev/icons?i=css', level: 100, },
  // { image: 'https://skillicons.dev/icons?i=js', level: 90 },
  { image: 'https://skillicons.dev/icons?i=ts', level: 90 },
  { image: 'https://skillicons.dev/icons?i=nodejs', level: 70 },
  { image: 'https://skillicons.dev/icons?i=sass', level: 99 },
  { image: 'https://skillicons.dev/icons?i=styledcomponents', level: 95 },
  // { image: 'https://skillicons.dev/icons?i=tailwind', level: 100 },
  // { image: 'https://skillicons.dev/icons?i=vite', level: 100 },
  // { image: 'https://skillicons.dev/icons?i=webpack', level: 70 },
  { image: 'https://skillicons.dev/icons?i=react', level: 98 },
  // { image: 'https://skillicons.dev/icons?i=nextjs', level: 90 },
  { image: 'https://skillicons.dev/icons?i=docker', level: 70 },
  { image: 'https://skillicons.dev/icons?i=aws', level: 50, },
  // { image: 'https://skillicons.dev/icons?i=dash', level: 80 },
  // { image: 'https://skillicons.dev/icons?i=bootstrap', level: 100 },
  // { image: 'https://skillicons.dev/icons?i=figma', level: 100 },
  { image: 'https://skillicons.dev/icons?i=git', level: 100, },
  { image: 'https://skillicons.dev/icons?i=jest', level: 80 },
  { image: 'https://skillicons.dev/icons?i=php', level: 70 },
  // { image: 'https://skillicons.dev/icons?i=laravel', level: 50 },
  // { image: 'https://skillicons.dev/icons?i=linux', level: 80 },
  // { image: 'https://skillicons.dev/icons?i=mysql', level: 80 },
  // { image: 'https://skillicons.dev/icons?i=mongodb', level: 70 },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(skills)
}
