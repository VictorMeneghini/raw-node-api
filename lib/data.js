// dependencies
const fs = require("fs")
const path = require("path")

// Container for the module (to be exported)
const lib = {}

// Base directory of the data
lib.baseDir = path.join(__dirname, "/../.data/")

// Write data to a file
lib.create = (dir, file, data) => {
  // open the file for writing
  return new Promise((res, rej) => {
    try {
      const fileDescriptor = fs.openSync(`${lib.baseDir}${dir}/${file}.json`, "wx")
  
      let stringData = JSON.stringify(data)
  
      fs.writeFileSync(fileDescriptor, stringData)
      fs.closeSync(fileDescriptor)
  
      res("Data created and stored")
    } catch (error) {
      rej("This file already exist")
    }
  })
}
// read data from a file
lib.read = (dir, file, cb) => {
  return new Promise((res, rej) => {
    try {
      const data =  fs.readFileSync(`${lib.baseDir}${dir}/${file}.json`, "utf-8", (err, data) => {
        cb(err, data)
      })

      res(data)
    } catch (error) {
      rej(error)
    }
  })  
}

lib.update = (dir, file, data) => {
  return new Promise((res, rej) => {
    try {
      const fileDescriptor = fs.openSync(`${lib.baseDir}${dir}/${file}.json`,"r+")
      let stringData = JSON.stringify(data)
  
      fs.writeFileSync(fileDescriptor, stringData)
      fs.closeSync(fileDescriptor)

      res("Data updated")
    
    } catch (error) {
      rej(error)
    }
  })
}

lib.delete = (dir, file, callback) => {
  fs.unlink(`${lib.baseDir}${dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false)
    }else {
      callback("error deleting file")
    }
  })
}

module.exports = lib