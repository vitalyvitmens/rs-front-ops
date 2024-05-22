const express = require('express')
const { default: fetch } = require('node-fetch')

const app = express()

app.get('/', (req, res) => {
  fetch('http://date:3005')
    .then((res) => res.json())
    .then((data) => {
      res.send(`Hello! Current date: ${data}\n`)
    })
})

app.listen(3000, () => {
  console.log('Ready on port 3000!')
})
