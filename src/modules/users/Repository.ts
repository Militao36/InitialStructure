import { IUser } from './IUser'
import { IUserRepository } from './IRepository'
import { userSchema as UserSchema } from './Schema'

export class UserRepository implements IUserRepository {
  private userSchema: typeof UserSchema

  constructor ({ userSchema }) {
    this.userSchema = userSchema
  }

  create (data: IUser[]): Promise<IUser[]> {
    return this.userSchema.insertMany(data)
  }
}