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
  return new Promise((res, rej) => {
    try {
      const fileDescriptor = fs.openSync(`${lib.baseDir}${dir}/${file}.json`, "wx")
  
      let stringData = JSON.stringify(data)
  
      fs.writeFileSync(fileDescriptor, stringData)
      fs.closeSync(fileDescriptor)
  
      res("Data created and stored")
    } catch (error) {
      rej("This file already exist")
      // console.log(error)
      // return error
    }
  })

 
  
}

// read data from a file
lib.read = (dir, file, cb) => {

  fs.readFileSync(`${lib.baseDir}${dir}/${file}.json`, "utf-8", (err, data) => {
    cb(err, data)
  })
}

lib.update = (dir, file, data, callback) => {
  fs.open(`${lib.baseDir}${dir}/${file}.json`,"r+", (err, fileDescriptor) => {
    if (!err && fileDescriptor) {
      let stringData = JSON.stringify(data)

      fs.truncate(fileDescriptor, (err)=> {
        if(!err) {
          fs.writeFile(fileDescriptor, stringData, (err) => {
            if(!err) {
              fs.close(fileDescriptor, (err) => {
                if (!err) {
                  callback(false)
                }else {
                  console.log("Error closing existing file")
                }
              })
            } else {
              callback("Error writing to existing file ")
            }
          })
        } else {  
          callback("error truncating file")
        }
      })

    } else {
      callback("Could not open the file or updating")
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