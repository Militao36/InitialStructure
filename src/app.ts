import express from 'express'
const app = express()

app.use(express.json())

app.get('/version', (req, res) => {
  return res
    .status(200)
    .send()
})

export default app
