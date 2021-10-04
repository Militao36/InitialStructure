import { asClass, asValue, createContainer, InjectionMode } from 'awilix'
import IContainer from './interfaces/IContainer'

import { prisma } from './config/database'
import { CryptoHash } from './util/hash'
import { Logger } from './util/Logger'

const definition = {
    prisma: asValue(prisma),
    hash: asClass(CryptoHash).singleton(),
    logger: asClass(Logger).singleton()
}

const container = createContainer<IContainer>({
    injectionMode: InjectionMode.PROXY
})

container.register(definition)

export default container