import "dotenv/config";
import pg from 'pg'

const {Pool} = pg

const pool = new Pool({
  host: process.env.DB_HOST
})

export default pool