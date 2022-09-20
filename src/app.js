/**
 * Nodejs & MySQL Deploy gratuito en Railway
 * Canal: Fazt
 * https://www.youtube.com/watch?v=C3NhmT__Mn4
 */
import express from 'express'
import { pool } from './db.js'
import { PORT } from './config.js'

const app = express();

app.get('/', async (req, res) => {
  const [rows] = await pool.query(`SELECT * FROM users`);
  res.json(rows)  
})

app.get('/ping', async (req, res) => {
  const [result] = await pool.query(`SELECT "hello world" as RESULT`);
  console.log(result)
  res.json(result[0])
  res.send('Welcome to Server')
})

app.get('/create', async (req, res) => {
  const [result] = await pool.query(`INSERT INTO users(name) VALUES ("John")`);
  res.json(result)
  res.send('Agregado')
})


app.listen(PORT);

console.log("Server on Port ",PORT);

