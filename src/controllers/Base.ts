import { GET, PATCH, POST, route } from 'awilix-express'
import { Request, Response } from 'express'

@route('/BASE')
class UserController {
  @POST()
  async save (request: Request, response: Response) {}

  @route('/:uuid')
  @PATCH()
  async update (request: Request, response: Response) {

  }

  @GET()
  async get (request: Request, response: Response) {

  }

  @route('/:uuid')
  @GET()
  async getById (request: Request, response: Response) {

  }
}

export default UserController