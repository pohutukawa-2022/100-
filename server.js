const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs').promises
const path = require('path')
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

server.get('/meat', (req, res) => {
  res.render('slider')
})

server.get('/meat/img-info/:id', async (req, res) => {
  const dataPath = path.join(__dirname, 'meat.json')
  await fs.readFile(dataPath, 'utf-8')
    .then((contents) => {
      const data = JSON.parse(contents)
      // const meat = Object.keys(data)
      
      const meat = data.find( (Element) => Element.id === Number(req.params.id))

      const viewData = {
        name: meat.name,
        rarity: meat.rarity,
        healthRating: meat.healthRating,
        ageMonths: meat.ageMonths,
        poisonStatus: meat.poisonStatus
      }
      res.render('info', viewData)
    })
    .catch((error) => {
      console.error('Getting data failed yet again')
    })
})
function getMeatData(thisKey, value) {
  const filePath = path.join(__dirname, 'meat.json')
  const newData = {  }
}
module.exports = server
