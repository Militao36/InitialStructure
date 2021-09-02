import { PrismaClient } from '@prisma/client'
import { UserRepo } from '../repositories/User'

export default interface IContainer {
    prisma: PrismaClient,
    userRepo: UserRepo
}
