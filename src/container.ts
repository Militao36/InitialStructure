import { asClass, asValue, createContainer, InjectionMode, Lifetime } from 'awilix'
import Emittery from 'emittery'

import IContainer from './interfaces/IContainer'

import { prisma } from './config/database'
import { CryptoHash } from './util/hash'
import { Logger } from './util/Logger'

const definition = {
    prisma: asValue(prisma),
    hash: asClass(CryptoHash).singleton(),
    logger: asClass(Logger).singleton(),
    emittery: asClass(Emittery).singleton()
}

const container = createContainer<IContainer>({
    injectionMode: InjectionMode.PROXY
})

container.loadModules(
    [
        ['services/*.ts', Lifetime.SINGLETON]
    ],
    {
        formatName: 'camelCase'
    }
)

container.register(definition)

export default container