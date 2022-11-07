import { ServerError } from '../errors'
import { ApiService } from './api-service'

class SkillService extends ApiService {
  async all () {
    const { statusCode, body } = await this.request<Skills>({
      url: '/skills',
      method: 'get'
    })

    switch (statusCode) {
      case 200: return body ?? []
      default: throw new ServerError()
    }

  }
}

export const skillService = new SkillService()
