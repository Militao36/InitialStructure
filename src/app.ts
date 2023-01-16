import express from 'express'
import { loadControllers, scopePerRequest } from 'awilix-express'

import container from './container'

const app = express()

app.use(express.json())

app.disable('x-powered-by')
app.use(scopePerRequest(container))
app.use(loadControllers(process.env.AWILIX_CONTROLLERS, { cwd: __dirname }))

app.get('/version', (req, res) => res.status(200).send('1.0.0'))

export default app
