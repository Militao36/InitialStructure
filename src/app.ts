import { loadControllers, scopePerRequest } from 'awilix-express'
import express from 'express'
import pinoHttp from 'pino-http'
import container from './container'
import { convertBodyRequestToNull } from './util/middlewares/ConvertBodyRequestToNull'
import { errorHandler } from './util/middlewares/errorHandler'

const app = express()

app.use(express.json())

app.disable('x-powered-by')

// middlewares

if (JSON.parse(process.env.LOGGER_HTTP)) {
  app.use(pinoHttp({ logger: container.resolve('logger') }))
}

app.use(scopePerRequest(container))
app.use(convertBodyRequestToNull)
app.use(errorHandler)

app.use(loadControllers(process.env.AWILIX_CONTROLLERS, { cwd: __dirname }))

// api version
app.get('/version', (req, res) => res.status(200).send('1.0.0'))

export default app
