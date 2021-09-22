import { asValue, createContainer, InjectionMode } from 'awilix'
import IContainer from './interfaces/IContainer'

import { prisma } from './config/database'

const definition = {
    prisma: asValue(prisma)
}

const container = createContainer<IContainer>({
    injectionMode: InjectionMode.PROXY
})

container.register(definition)

export default container