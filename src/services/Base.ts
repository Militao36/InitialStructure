import { v4 } from 'uuid'

abstract class BaseService<Repo, Entity> {
  private repo: Repo | any;
  constructor (repo: Repo) {
    this.repo = repo
  }

  async save (data: Entity): Promise<string> {
    this.validationSave(data)
    const id = v4()

    await this.repo.save({
      id: id,
      ...data
    })

    return id
  }

  async update (id: string, data: Entity): Promise<void> {
    this.validationUpdate(data)
    await this.findById(id)
    await this.repo.update(data, id)
  }

  async delete (id: string): Promise<void> {
    await this.findById(id)
    await this.repo.delete(id)
  }

  async findById (id: string): Promise<Entity> {
    const data = await this.repo.findById(id)

    if (!data) {
      throw new Error('NOT_FOUND. $404')
    }

    return data
  }

  abstract validationSave(data: Entity): Promise<string>

  abstract validationUpdate(data: Entity): Promise<string>
}

export { BaseService }
