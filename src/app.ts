import { loadControllers, scopePerRequest } from 'awilix-express'
import express from 'express'
import container from './container'

const app = express()

app.use(express.json())

app.use(scopePerRequest(container))

app.use(loadControllers('controllers/*.ts', { cwd: __dirname }))

app.get('/version', (req, res) => {
  return res
    .status(200)
    .send('1.0.0')
})

export default app
