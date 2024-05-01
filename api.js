import "dotenv/config";
import pg from 'pg'
import express from 'express'

const app = express()

const serverPort = process.env.SERVER_PORT

const {Pool, Client} = pg

const pool = new Pool({
  user: process.env.DB_USER,
  
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(serverPort, () => {
  console.log(`Server running on port ${serverPort}...`)
})