import express from "express";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Homepage</h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>About Me</h1>')
})

app.get('/contact', (req, res) => {
  res.send('<h1>Contact</h1>')
})

app.post('/register', (req, res) => {
  res.sendStatus(201)
})

app.put('/user/name', (req, res) => {
  res.sendStatus(200)
})

app.patch('/user/name', (req, res) => {
  res.sendStatus(200)
})

app.delete('/user/name', (req, res) => {
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
