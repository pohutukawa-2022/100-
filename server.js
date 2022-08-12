const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Getting data from json
const { getData, updateData } = require('./utils')
let food
getData((data) => (food = data))

server.get('/', (req, res) => {
  res.render('home')
})

server.get('/menu', (req, res) => {
  const viewData = {
    meat: food.meatlovers,
    veg: food.notMeat,
  }
  res.render('slider', viewData)
})

server.get('/menu/:food', (req, res) => {
  res.render('slider')
})

module.exports = server
