import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class MysqlUserRepository implements IUsersRepository {
  async create(data: User): Promise<string> {
    return data.id
  }
}