import { PrismaClient } from '@prisma/client'

export default interface IContainer {
    prisma: PrismaClient,
}
