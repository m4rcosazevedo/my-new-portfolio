import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios'

type RequestData<T> = {
  url: string
  data?: T
  method: 'get'|'put'|'post'|'delete'
  params?: object
  headers?: object
}

type HttpResponse<T = any> = {
  statusCode: number
  body?: T
}

export class ApiService {
  private api: AxiosInstance

  constructor () {
    this.api = axios.create({
      baseURL: "http://localhost:3000/api"
    })
  }

  async request<T = any>({ url, data, params = {}, headers = {}, method = 'get' }: RequestData<T>): Promise<HttpResponse<T>> {
    let response:AxiosResponse

    try {
      response = await this.api.request({
        url: url,
        data,
        params,
        headers,
        method
      })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        response = (error as AxiosError).response!
      } else {
        response = {
          status: 599,
          data: { message: "timeout" }
        } as AxiosResponse
      }
    }

    return {
      statusCode: response.status,
      body: response.data
    }
  }
}
