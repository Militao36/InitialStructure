import { loadControllers, scopePerRequest } from 'awilix-express'
import express from 'express'
import container from './container'

const app = express()

app.use(express.json())

app.use((request, response, next) => {
  if (Object.keys(request.body).length) {
    request.body = Object.assign(
      ...Object.keys(request.body).map(key => ({
        [key]: request.body[key] !== '' ? request.body[key] : null
      }))
    )
  }

  return next()
})

app.use(scopePerRequest(container))

app.use(loadControllers('controllers/*.ts', { cwd: __dirname }))

app.get('/version', (req, res) => {
  return res
    .status(200)
    .send('1.0.0')
})

export default app
