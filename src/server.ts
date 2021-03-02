import express from 'express'
const app = express()

app.get('/version', (req, res) => {
  return res
    .status(200)
    .send()
})

app.listen(3000)
