import { PrismaClient } from '@prisma/client'

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
}

export { BaseRepo }