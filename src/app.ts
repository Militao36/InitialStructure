import { scopePerRequest } from 'awilix-express'
import express from 'express'
import pinoHttp from 'pino-http'

import container from './container'
import { convertBodyRequestToNull } from './commons/middlewares/ConvertBodyRequestToNull'
import { errorHandler } from './commons/middlewares/errorHandler'
import './commons/config/connection'
import './schedule/index'

const app = express()

app.use(express.json())

app.disable('x-powered-by')

if (JSON.parse(process.env.LOGGER_HTTP)) {
  app.use(pinoHttp({ logger: container.resolve('logger') }))
}

app.use(scopePerRequest(container))
app.use(convertBodyRequestToNull)
app.use(errorHandler)

// api version
app.get('/version', (req, res) => res.status(200).send('1.0.0'))

export default app
