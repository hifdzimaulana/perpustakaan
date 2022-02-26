const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const router = require('./router')

app.use('/', router)

require('dotenv').config()
app.listen(process.env.APP_PORT, () => {
    console.log(`listening on http://localhost:${process.env.APP_PORT}`)
})