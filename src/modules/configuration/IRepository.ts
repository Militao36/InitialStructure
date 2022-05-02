import { IConfiguration } from './IConfiguration'

export interface IConfigurationRepostory {
  find: () => Promise<IConfiguration>
  findOneAndUpdate: (configuration: IConfiguration) => Promise<IConfiguration>
}