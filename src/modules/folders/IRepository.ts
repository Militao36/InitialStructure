import { IFolder } from './IFolder'

export interface IFolderRepostory {
  create(data: IFolder): Promise<IFolder>
}