const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')


server.get('/', (req, res) => {
    res.render('home')
})

server.get('/menu', (req, res) => {
    res.render('slider')
})

server.get('/menu/:food', (req, res) => {
    res.render('slider')
})

module.exports = server