import { UserEntity } from '../entity/user'
import IContainer from '../interfaces/IContainer'
import { UserRepo } from '../repositories/User'

class UserService {
    private userRepo: UserRepo;
    constructor ({ userRepo }: IContainer) {
        this.userRepo = userRepo
    }

    async save (user: UserEntity):Promise<void> {
        await this.userRepo.save(user)
    }

    async getAll (): Promise<UserEntity[]> {
        const data = await this.userRepo.getAll()
        return data
    }
}

export { UserService }