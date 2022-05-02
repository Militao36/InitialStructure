import { Schema, model } from 'mongoose'
import { IUser } from './IUser'

const UserSchema = new Schema(
  {
    fullName: {
      type: String
    },
    email: {
      type: String
    },
    address: {
      type: String
    },
    addressNumber: {
      type: Number
    },
    phoneNumber: {
      type: String
    }
  },
  { timestamps: true }
)

export const userSchema = model<IUser>('users', UserSchema)
