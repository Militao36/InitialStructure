import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: User): Promise<string>
}