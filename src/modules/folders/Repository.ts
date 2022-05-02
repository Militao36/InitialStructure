import { IFolder } from './IFolder'
import { IFolderRepostory } from './IRepository'
import { folderSchema as FolderSchema } from './Schema'

export class FolderRepository implements IFolderRepostory {
  private folderSchema: typeof FolderSchema

  constructor ({ folderSchema }) {
    this.folderSchema = folderSchema
  }

  create (data: IFolder): Promise<IFolder> {
    const folder = this.folderSchema.findOne({ name: data.name })
    if (folder) {
      throw new Error('Folder already exists')
    }

    return this.folderSchema.create(data)
  }
}