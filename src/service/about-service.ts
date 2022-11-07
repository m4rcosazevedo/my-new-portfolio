import { ServerError } from '../errors'
import { ApiService } from './api-service'

class AboutService extends ApiService {
  async me () {
    const { statusCode, body } = await this.request<About>({
      url: '/about',
      method: 'get'
    })

    switch (statusCode) {
      case 200: return body
      default: throw new ServerError()
    }

  }
}

export const aboutService = new AboutService()
