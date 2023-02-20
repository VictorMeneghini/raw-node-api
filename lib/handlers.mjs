
const acceptableMethods = ["post", "get", "put", "delete"]

// handlers 
const handlers = {
  ping: (data, cb) => {
    //cb a http status code, and a payload object
    cb(200, "server alive" )

  },

  users: (data, cb) => {
    if(acceptableMethods.includes(data.method)) {
      
    } else {
      cb(405)
    }

    cb(200, "user created")
  },
  
  notFound: (data, cb) => {
    cb(404, "Dont found")
  }
}

export default handlers