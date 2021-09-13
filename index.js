const express = require('express')
const bodyParser = require('body-parser')
const services = require('./services/index')
const pool = require('./db/pool')
const requireLogin = require('./middlewares/requireLogin')
const app = express()
const port = 3000

app.get('/seasons', requireLogin, services.getDriversBySeason)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})