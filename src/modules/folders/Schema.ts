import { Schema, model } from 'mongoose'
import { IFolder } from './IFolder'

const FileSchema = new Schema(
  {
    nome: {
      type: String
    }
  },
  { timestamps: true }
)

const FolderSchema = new Schema(
  {
    nome: {
      type: String
    },
    files: FileSchema
  },
  { timestamps: true }
)

export const folderSchema = model<IFolder>('folders', FolderSchema)
