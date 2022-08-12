const fs = require('fs')
const path = require('path')

function getData(cb) {
  const filePath = path.join(__dirname, 'data.json')
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Unable to find puppies data ', error.message)
      return
    }
    // returns data.json as an object
    cb(JSON.parse(data))
  })
}
function updateData() {
    console.log('update data func incomplete')
} 

module.exports = { getData, updateData }