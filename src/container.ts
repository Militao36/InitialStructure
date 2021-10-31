import { asClass, asValue, createContainer, InjectionMode, Lifetime } from 'awilix'
import Emittery from 'emittery'

import { prisma } from './config/database'
import { ClienteRepo } from './repositories/ClienteRepo'
import { ClienteService } from './services/ClienteService'
import { CryptoHash } from './util/hash'
import { Logger } from './util/Logger'

const definition = {
    prisma: asValue(prisma),
    hash: asClass(CryptoHash).singleton(),
    logger: asClass(Logger).singleton(),
    emittery: asClass(Emittery).singleton(),
    // services
    clienteService: asClass(ClienteService).singleton(),
    // repo
    clienteRepo: asClass(ClienteRepo).singleton()
}

const container = createContainer({
    injectionMode: InjectionMode.PROXY
})

container.loadModules(
    [
        [process.env.AWILIX_SERVICES, Lifetime.SINGLETON]
    ]
)

container.loadModules(
    [
        [process.env.AWILIX_REPOSITORIES, Lifetime.SINGLETON]
    ]
)

container.register(definition)

export default container