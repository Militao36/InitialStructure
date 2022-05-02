import { Router } from 'express'
import container from '../../container'
import { FoldersController } from './Controller'

const router = Router()

router.post('/folders', container.resolve('foldersController').createFolder.bind(FoldersController))