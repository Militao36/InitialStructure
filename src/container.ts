import { asClass, asValue, createContainer, InjectionMode } from 'awilix'
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

container.register(definition)

export default container
