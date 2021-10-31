import express from 'express'
import { loadControllers, scopePerRequest } from 'awilix-express'
import { convertBodyRequestToNull } from './middlewares/ConvertBodyRequestToNull'
import { errorHandler } from './middlewares/errorHandler'

import container from './container'

const app = express()

app.use(express.json())

app.disable('x-powered-by')
app.use(scopePerRequest(container))
app.use(convertBodyRequestToNull)
app.use(loadControllers(process.env.AWILIX_CONTROLLERS, { cwd: __dirname }))
app.get('/version', (req, res) => res.status(200).send('1.0.0'))
app.use(errorHandler)

export default app
