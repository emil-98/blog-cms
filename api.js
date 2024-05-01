import pool from './db.js'
import express from 'express'

const app = express()

const serverPort = process.env.SERVER_PORT

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(serverPort, () => {
  console.log(`Server running on port ${serverPort}...`)
})