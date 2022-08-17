const fs = require('fs')
const path = require('path')

function getData(cb) {
  const filePath = path.join(__dirname, 'data.json')
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Unable to find puppies data ', error.message)
      return
    }
    try {
      // returns data.json as an object
      cb(JSON.parse(data))
    } catch (parseErr) {
      console.error('Parsing json data failed yet again')
    }
  })
}
function updateData(cb) {
  // get starting data
  getData((data) => {
    // update data
    const newData = {
      ...data,
    }
    // JSON.stingify
    try {
      const stringData = JSON.stringify(newData, null, 2)
      // write back to the file
      const filePath = path.join(__dirname, 'data.json')
      fs.writeFile(filePath, stringData, 'utf8', (err) => {
        if (err) {
          console.error(' error error freckin error')
          return
        }
        cb()
      })
    } catch (stringifyErr) {
      console.log('Failed at updating data')
    }
  })
}

module.exports = { getData, updateData }
