import { GET, POST, route } from 'awilix-express'
import { Request, Response } from 'express'
import IContainer from '../interfaces/IContainer'
import { UserRepo } from '../repositories/User'

route('/users')
class UserController {
    private userRepo: UserRepo;
    constructor ({ userRepo }: IContainer) {
        this.userRepo = userRepo
    }

    @POST()
    async save (request:Request, response:Response) {
        const userData = request.body
        await this.userRepo.save(userData)
        return response.status(201).send()
    }

    @GET()
    async get (request:Request, response:Response) {
        const data = await this.userRepo.getAll()
        return response.status(200).json(data)
    }
}

export default UserController