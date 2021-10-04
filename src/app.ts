import { loadControllers, scopePerRequest } from 'awilix-express'
import express, { NextFunction, Request, Response } from 'express'
import container from './container'

const app = express()

app.use(express.json())

app.use((request, _, next) => {
  if (Object.keys(request.body).length) {
    Object.keys(request.body).forEach((key) => {
      request.body[key] = request.body[key] !== '' ? request.body[key] : null
    })
  }

  return next()
})

app.use(scopePerRequest(container))

app.use(loadControllers('controllers/*.ts', { cwd: __dirname }))

app.get('/version', (req, res) => res.status(200).send('1.0.0'))

app.use((err: any, _: Request, res: Response, next: NextFunction) => {
  return res.status(err.statusCode || 500).json({
    error: err.message
  })
})

export default app
