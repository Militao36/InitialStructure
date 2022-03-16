import { asClass, asValue, createContainer, InjectionMode, Lifetime } from 'awilix'
import { HealtcheckService } from './services/healtcheck.service'
import { database } from './util/config/database'
import { Logger } from './util/Logger'

const definition = {
    // utils
    logger: asValue(Logger),
    database: asValue(database),
    // services
    healtcheckService: asClass(HealtcheckService).singleton()
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