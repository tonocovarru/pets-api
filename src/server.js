// dependencies
const express = require('express')

// own packages
// const routes = require('./routes')

// const or variables
const app = express()
const port = 3000

const obj = { message: 'Hola Mundo Koders' }
app.get('/hola', (req, res) => res.json(obj))

module.exports = {
  server: app,
  port
}
