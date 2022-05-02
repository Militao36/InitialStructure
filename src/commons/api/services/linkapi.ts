import { IHttp } from '../api'

class LinkApiService {
  private api: IHttp
  constructor ({ http }) {
    this.api = http
  }

  public async getUsers (limit: number, page: number) {
    const response = await this.api.get(`/users?limit=${limit}&page=${page}`)
    return response.data
  }
}

export { LinkApiService }