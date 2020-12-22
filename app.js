const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Welcome to my Hub!!')
})

app.listen(port, () => {
  console.log(`Hub running at http://localhost:${port}`)
})