import axios, { AxiosInstance } from 'axios'

export interface IHttp {
  get: (url: string, headers?: { [key: string]: any }) => Promise<{ data: any, headers: {} }>
}

class Http implements IHttp {
  private api: AxiosInstance

  private DEFAULT_HEADERS = {
    'content-type': 'application/json'
  }

  constructor () {
    this.api = axios.create({
      baseURL: 'https://linkapi-desafio-tech.gateway.linkapi.solutions/v1',
      auth: {
        username: process.env.API_BASIC_USER,
        password: process.env.API_BASIC_PWD
      },
      headers: {
        ...this.DEFAULT_HEADERS
      }
    })
  }

  public async get (url: string, headers: { [key: string]: any } = {}) {
    const response = await this.api.get(url, { headers })

    return {
      data: response.data,
      headers: response.headers
    }
  }
}

export { Http }