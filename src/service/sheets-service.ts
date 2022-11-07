import { ServerError } from '../errors'
import { SpreadSheetService } from './spreadsheets-service'

class Sheets extends SpreadSheetService {
  async projects (): Promise<Projects> {
    const response = await this.request('projects')

    if (response.statusCode === 200) {
      const body = response.body ?? []
      body.splice(0, 1)

      return body.map((item: string[]) => {
        const [project, image, description] = item

        return {
          project,
          image,
          description
        }
      }).reverse()
    }

    throw new ServerError()
  }

  async about (): Promise<About> {
    const response = await this.request('about')

    if (response.statusCode === 200) {
      return response.body.map((item: string[]) => ({
        title: item[0],
        image: item[1],
        description: item[2]
      }))[0]
    }

    throw new ServerError()
  }
  
  async contact (): Promise<Contact> {
    const response = await this.request('contact')

    if (response.statusCode === 200) {
      const [title, phone, address, email] = response.body[1]

      return {
        title,
        phone: phone ?? null,
        address: address ?? null,
        email: email ?? null
      }
    }

    throw new ServerError()
  }

  async experiences (): Promise<Experience[]> {
    const response = await this.request<Array<string[]>>('experience')

    if (response.statusCode === 200) {
      const body = response.body ?? []
      body.splice(0, 1)

      return body.map(item => {
        const [logo, office, company, skills, period, activities] = item

        return ({
          logo,
          office,
          company,
          skills: skills?.split(';').filter(i => i),
          period,
          activities: activities?.split(';').filter(i => i)
        })
      }).reverse() as Experience[] || []
    }

    throw new ServerError()
  }

  async skills (): Promise<Skills> {
    const response = await this.request<Array<string[]>>('skills')

    if (response.statusCode === 200) {
      const body = response.body ?? []
      body.splice(0, 1)

      return body.map(item => {
        const [image, level] = item

        return ({
          image,
          level: Number(level)
        })
      })
    }

    throw new ServerError()
  }

  async hero (): Promise<Hero> {
    const response = await this.request('hero')

    if (response.statusCode === 200) {
      const item = response.body[1]

      const [office, avatar, writing] = item

      return {
        office,
        avatar,
        writing: writing?.split(';').filter((i: any) => i)
      }
    }

    throw new ServerError()
  }
}

export const sheets = new Sheets()
