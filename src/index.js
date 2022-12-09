//import express from 'express'
const express = require('express')

const app = express()
const port = process.env.port || 3000

app.get('/', (req, res) => {
  res.send('<h1> helo world!</h1>')
})
app.listen(port, () =>
  console.log(`Server is ready up on: https://localhost:${port}`)
)
