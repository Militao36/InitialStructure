import { PrismaClient } from '@prisma/client'
import { UserEntity } from '../entity/user'
import IContainer from '../interfaces/IContainer'

class UserRepo {
    private prisma: PrismaClient;
    constructor ({ prisma }: IContainer) {
        this.prisma = prisma
    }

    async save (user: UserEntity) {
        await this.prisma.users.create({
            data: user
        })
    }

    async getAll () {
        return this.prisma.users.findMany()
    }
}

export { UserRepo }