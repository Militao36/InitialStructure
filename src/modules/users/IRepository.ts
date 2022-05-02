import { IUser } from './IUser'

export interface IUserRepository {
  create(data: IUser[]): Promise<IUser[]>
}