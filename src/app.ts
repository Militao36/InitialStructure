import express from 'express'
import { loadControllers } from 'awilix-express'
import { convertBodyRequestToNull } from './middlewares/ConvertBodyRequestToNull'
import { errorHandler } from './middlewares/errorHandler'

const app = express()

app.use(express.json())

app.use(convertBodyRequestToNull)

app.use(loadControllers(process.env.AWILIX_CONTROLLERS, { cwd: __dirname }))

app.get('/version', (req, res) => res.status(200).send('1.0.0'))

app.use(errorHandler)

export default app
