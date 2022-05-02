import { IFolder } from './IFolder'
import { FolderRepository } from './Repository'

export class FolderService {
  folderRepository: FolderRepository
  constructor ({ folderRepository }) {
    this.folderRepository = folderRepository
  }

  async create (data: IFolder): Promise<IFolder> {
    return this.folderRepository.create(data)
  }
}