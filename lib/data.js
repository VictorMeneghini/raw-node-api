// dependencies
const fs = require("fs")
const path = require("path")

// Container for the module (to be exported)
const lib = {}

// Base directory of the data
lib.baseDir = path.join(__dirname, "/../.data/")

// Write data to a file
lib.create = function(dir, file, data, callback) {
  // open the file for writing
  fs.open(`${lib.baseDir}${dir}/${file}.json`, "wx", (err, fileDescriptor) => {
    if(!err && fileDescriptor) {
      //convert data to string
      const stingData = JSON.stringify(data)

      // write to file and close it
      fs.writeFile(fileDescriptor, stingData, (err) => {
        if(!err) {
          fs.close(fileDescriptor, (err) => {
            if (!err) {
              callback(false)
            } else {
              callback("Error closing file")
            }
          })
        } else {
          callback("Error writing to new file")
        }
      })
    }else {
      console.log(err)
      callback("Could not create new file, it may already exist")
    }
  })
}

// read data from a file
lib.read = (dir, file, cb) => {
  fs.readFile(`${lib.baseDir}${dir}/${file}.json`, "utf-8", (err, data) => {
    cb(err, data)
  })
}

module.exports = lib