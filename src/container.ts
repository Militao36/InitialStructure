import { asClass, asValue, createContainer, InjectionMode } from 'awilix'
import IContainer from './interfaces/IContainer'

import { prisma } from './config/database'
import { UserRepo } from './repositories/User'

const definition = {
    prisma: asValue(prisma),
    userRepo: asClass(UserRepo).singleton()
}

const container = createContainer<IContainer>({
    injectionMode: InjectionMode.PROXY
})

container.register(definition)

export default container