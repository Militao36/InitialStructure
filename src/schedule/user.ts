import xml2js from 'xml2js'

import { ConfigurationRepository } from '../modules/configuration/Repository'
import { IConfiguration } from '../modules/configuration/IConfiguration'
import { LinkApiService } from '../commons/api/services/linkapi'
import { IUser } from '../modules/users/IUser'
import container from '../container'

export async function HandleUser () {
  try {
    await findUserAPI()
  } catch (error) {
    console.log(error)
  }
}

async function findUserAPI () {
  const { schedule: { limit, page } } = await findConfiguration()

  const linkApiService = container.resolve('linkApiService') as LinkApiService
  const dataUsers = await linkApiService.getUsers(5, 1)

  const users = await format(dataUsers)
  await container.resolve('userRepository').create(users)

  await findOneAndUpdate({ schedule: { limit, page: page + 1 } })
}

async function findConfiguration (): Promise<IConfiguration> {
  const configurationRepository = container.resolve('configurationRepository') as ConfigurationRepository

  const configuration = await configurationRepository.findOneAndUpdate()

  return configuration
}

async function findOneAndUpdate (configuration: IConfiguration): Promise<IConfiguration> {
  const configurationRepository = container.resolve('configurationRepository') as ConfigurationRepository

  const data = await configurationRepository.findOneAndUpdate({
    schedule: {
      limit: configuration.schedule.limit,
      page: configuration.schedule.page
    }
  })

  return data
}

async function format (xml: string): Promise<IUser> {
  const result = await xml2js.parseStringPromise(xml, { async: true })
  return result?.data?.usersList?.item?.map((user: any) => {
    return {
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
      address: '',
      addressNumber: '',
      phoneNumber: ''
    }
    // {
    //   "createdAt": "2022-02-23T05:20:06.524Z",
    //   "firstName": "Nakia",
    //   "avatar": "https://cdn.fakercloud.com/avatars/al_li_128.jpg",
    //   "email": "Melissa.Stamm84@hotmail.com",
    //   "lastName": "Towne",
    //   "id": "1"
    // },
  })
}