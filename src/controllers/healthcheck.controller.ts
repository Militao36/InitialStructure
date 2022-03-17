import { GET, route } from 'awilix-express'
import { Request, Response } from 'express'
import { HealtcheckService } from '../services/healtcheck.service'

@route('/healthcheck')
export default class UserAPI {
  private healtcheckService: HealtcheckService

  constructor ({ healtcheckService }) {
    this.healtcheckService = healtcheckService
  }

  @GET()
  async index (req: Request, res: Response) {
    const result = this.healtcheckService.healtCheck()
    return res.json(result)
  }
}
