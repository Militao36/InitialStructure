import { PrismaClient } from '@prisma/client'

type Filter = {
  fields: string[]
  filter: {
    [keyOrOperator: string]: {
      [keyOrOperator: string]: any
    }
  }
}

class BaseRepo<T> {
  public prisma: PrismaClient;
  public table: string;
  constructor (prisma: PrismaClient, table: string) {
    this.prisma = prisma
    this.table = table
  }

  async save (data: T): Promise<void> {
    await this.prisma[this.table].create({
      data: data as any
    })
  }

  async update (data: T, id: string): Promise<void> {
    await this.prisma[this.table].update({
      data: data as any,
      where: {
        id: id
      }
    })
  }

  async findById (id: string): Promise<T> {
    return await this.prisma[this.table].findFirst({
      where: {
        id: id
      }
    })
  }

  async delete (id: string): Promise<void> {
    await this.prisma[this.table].delete({
      where: {
        id: id
      }
    })
  }

  async query<K> (query: Filter): Promise<K> {
    const fields = query.fields.reduce((prev, current) => {
      if (current.includes('.')) {
        const [table, colunm] = current.split('.')
        return {
          ...prev,
          [table]: {
            [colunm]: true
          }
        }
      }

      return {
        ...prev,
        [current]: true
      }
    }, {})

    const wheres = {}
    for (const key in query.filter) {
      wheres[key] = query.filter[key]
    }

    return this.prisma[this.table].findMany({
      select: fields,
      where: wheres
    })
  }
}

export { BaseRepo }