import { IConfiguration } from './IConfiguration'
import { IConfigurationRepostory } from './IRepository'
import { configurationSchema as ConfigurationSchema } from './Schema'

export class ConfigurationRepository implements IConfigurationRepostory {
  private configurationSchema: typeof ConfigurationSchema

  constructor ({ configurationSchema }) {
    this.configurationSchema = configurationSchema
  }

  public async find (): Promise<IConfiguration> {
    const data = await this.configurationSchema.find({
      name: 'DEFAULT'
    })

    return data[0]
  }

  async findOneAndUpdate (configuration?: IConfiguration): Promise<IConfiguration> {
    await this.configurationSchema.findOneAndUpdate(
      {
        schedule: {
          name: 'DEFAULT'
        }
      },
      {
        $set: {
          schedule: {
            name: 'DEFAULT',
            limit: configuration?.schedule?.limit || 5,
            page: configuration?.schedule?.page || 1
          }
        }
      },
      {
        upsert: true
      }
    )

    const data = await this.find()

    return data
  }
}