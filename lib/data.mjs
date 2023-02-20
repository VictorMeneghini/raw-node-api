// dependencies
import fs from "fs"
import path from "path"

// ModuleA.js
import { getDirName } from '../utils/index.mjs'

// Getting the dirname of moduleA.js
const dirName = getDirName(import.meta.url)


// Container for the module (to be exported)
const lib = {}

// Base directory of the data
lib.baseDir = path.join(dirName, "/../.data/")

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

// Update data form a file

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

// Delete data from a file

lib.delete = (dir, file, callback) => {
  fs.unlink(`${lib.baseDir}${dir}/${file}.json`, (err) => {
    if (!err) {
      callback(false)
    }else {
      callback("error deleting file")
    }
  })
}

export default lib