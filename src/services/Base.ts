import { v4 } from 'uuid'
import { IBaseService } from '../interfaces/IBaseService'

abstract class BaseService<Repo extends IBaseService, Entity> {
  private repo: Repo;
  constructor (repo: Repo) {
    this.repo = repo
  }

  async save (data: Entity): Promise<string> {
    await this.validationSave(data)
    const id = v4()

    await this.repo.save({
      id: id,
      ...data
    })

    return id
  }

  async update (id: string, data: Entity): Promise<void> {
    await this.validationUpdate(data)
    await this.findById(id)
    await this.repo.update(data, id)
  }

  async delete (id: string): Promise<void> {
    await this.findById(id)
    await this.repo.delete(id)
  }

  async findById (id: string): Promise<Entity> {
    const data = await this.repo.findByIdOrFail(id)
    return data
  }

  abstract validationSave(data: Entity): Promise<string>

  abstract validationUpdate(data: Entity): Promise<string>
}

export { BaseService }
