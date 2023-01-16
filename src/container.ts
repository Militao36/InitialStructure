import Awilix from 'awilix'
import Emittery from 'emittery'

import { prisma } from './config/database'

const definition = {
    prisma: Awilix.asValue(prisma),
    emittery: Awilix.asClass(Emittery).singleton()
}

const container = Awilix.createContainer({
    injectionMode: Awilix.InjectionMode.PROXY
})

container.register(definition)

export default container