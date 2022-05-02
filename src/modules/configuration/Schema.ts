import { Schema, model } from 'mongoose'

const Schedule = new Schema(
  {
    name: {
      type: String
    },
    page: {
      type: Number
    },
    limit: {
      type: Number
    }
  },
  { timestamps: true }
)

const ConfigurationSchema = new Schema(
  {
    schedule: {
      type: Schedule
    }
  },
  { timestamps: true }
)

export const configurationSchema = model('configurations', ConfigurationSchema)