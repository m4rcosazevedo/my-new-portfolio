// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import images from '../../utils/images'

type Data = About

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    image: images.about,
    title: 'Here is a <span class="underline decoration-[#F7AB0A]/50">little</span> background',
    description: `I'm Marcos.
    💛 You might also know me as PCA! I've been coding for over 15 years now.
    As a Full Stack developer I've worked both with startups and large corporations
    to help build & scale their companies. Along the journey I realized my passion existed in helping others excel and pursue the is dreams as upcoming developers.
  `})
}
