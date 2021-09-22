import { UserEntity } from '../entity/user'
import IContainer from '../interfaces/IContainer'
import { BaseRepo } from './Base'

class UserRepo extends BaseRepo<UserEntity> {
    constructor ({ prisma }: IContainer) {
        super(prisma, 'users')
    }
}

export { UserRepo }