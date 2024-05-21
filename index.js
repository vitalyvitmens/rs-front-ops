const express = require('express')
const { default: fetch } = require('node-fetch')

const app = express()

app.get('/', (req, res) => {
  fetch('http://localhost:3005')
    .then((res) => res.text())
    .then((data) => {
      res.send(`Hello! Current date: ${data}\n`)
    })
})

app.listen(3000, () => {
  console.log('Ready on port 3000!')
})
