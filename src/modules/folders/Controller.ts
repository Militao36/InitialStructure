import { Request, Response } from 'express'
import { FolderService } from './Service'

export class FoldersController {
  folderService: FolderService

  constructor ({ folderService }) {
    this.folderService = folderService
  }

  async createFolder (request: Request, response: Response) {
    const { name } = request.body as { name: string }
    await this.folderService.create({ name })
  }
}