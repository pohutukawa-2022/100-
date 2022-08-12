const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const path = require('path')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Getting data from json
// const { getData, updateData } = require('./utils')
// let food
// getData((data) => {
//     food = data
//     updateData()
// })

const filePath = path.join(__dirname, 'data.json')
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Unable to find puppies data ', error.message)
    return
  }
  // returns data.json as an object
  const json = JSON.parse(data)
  console.log(json)
})

server.get('/', (req, res) => {
  res.render('home')
})

server.get('/meat', (req, res) => {
  res.render('slider')
})
server.get('/meat/img-info', (req, res) => {
  res.render('meat')
})



module.exports = server
