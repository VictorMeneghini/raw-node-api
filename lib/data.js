// dependencies
const fs = require("fs")
const path = require("path")

// Container for the module (to be exported)
const lib = {}

// Base directory of the data
lib.baseDir = path.join(__dirname, "/../.data")

// Write data to a file
lib.create = function(dir, file, data, callback) {
  // open the file for writing
  fs.open(`${lib.baseDir}${dir}/${file}.json`, "wx", (err, fileDescriptor)=> {
    if(!err && fileDescriptor) {

    }else {
      callback("Could not create new file, it may already exist")
    }
  })
}

module.export = lib