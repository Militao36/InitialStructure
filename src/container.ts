import { asClass, asValue, createContainer, InjectionMode } from 'awilix'
import { Http } from './commons/api/api'
import { LinkApiService } from './commons/api/services/linkapi'
import { Logger } from './commons/util/Logger'
import { ConfigurationRepository } from './modules/configuration/Repository'
import { configurationSchema } from './modules/configuration/Schema'
import { FoldersController } from './modules/folders/Controller'
import { FolderRepository } from './modules/folders/Repository'
import { folderSchema } from './modules/folders/Schema'
import { FolderService } from './modules/folders/Service'
import { UserRepository } from './modules/users/Repository'
import { HandleUser } from './schedule/user'

const definition = {
    // utils
    logger: asValue(Logger),
    linkApiService: asClass(LinkApiService).singleton(),
    http: asClass(Http).singleton(),
    // schedules
    handleUser: asValue(HandleUser),
    configurationSchema: asValue(configurationSchema),
    configurationRepository: asClass(ConfigurationRepository).singleton(),
    folderSchema: asValue(folderSchema),
    folderRepository: asClass(FolderRepository).singleton(),
    folderService: asClass(FolderService).singleton(),
    userRepository: asClass(UserRepository).singleton(),
    // controllers
    foldersController: asClass(FoldersController).singleton()
}

const container = createContainer({
    injectionMode: InjectionMode.PROXY
})

container.register(definition)

export default container
