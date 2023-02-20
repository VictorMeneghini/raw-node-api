// Dependencies
const http = require("http")
const https = require("https")
const fs = require("fs")
const nodePath = require("path")
const { StringDecoder } = require("string_decoder")
const url = require("url")
const config = require("./config")


console.log(config)

// Server
const server = http.createServer((req, res) => {
   handlerRequest(req, res)
})

const httpsOptions = {
  key: fs.readFileSync(nodePath.join(__dirname, "https", "key.pem")),
  cert: fs.readFileSync(nodePath.join(__dirname, "https", "cert.pem")),
}

const httpsServer = https.createServer(httpsOptions, (req, res) => {
  handlerRequest(req, res)
})


const handlerRequest = (req, res) => {
  // Get the URL and parse it
  const parsedUrl = url.parse(req.url, true)

  // Get the path
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g, "")

  // Get the querystring as an object
  const queryStringObject = parsedUrl.query
  // console.log(queryStringObject)

  // Get HTTP method
  const method = req.method.toLowerCase()
  // console.log(method)

  // Get the paylaod
  const decoder = new StringDecoder("utf-8")
  let buffer = ''

  // Get the headers
  const headers = req.headers
  // console.log(headers)

  req.on("data", (data) => {
    buffer += decoder.write(data)
  })

  req.on("end", () => {
    buffer += decoder.end()

    const chosenHandler = router[trimmedPath] ? router[trimmedPath] : handlers.notFound

    // contruct data object

    const data = {
      trimmedPath,
      queryStringObject,
      method,
      headers,
      payload: buffer
    }

    // route request
    chosenHandler(data, (statusCode, payload) => {
      
      res.setHeader("Content-Type", "application-json")
      res.writeHead(statusCode)
      res.end(JSON.stringify(payload))

    })

  })
}

// handlers 
const handlers = {
  ping: (data, cb) => {
    //cb a http status code, and a payload object
    cb(200, "server alive" )

  },
  notFound: (data, cb) => {
    cb(404, "Dont found")
  }
}

const router = {
  ping: handlers.ping,
  notFound: handlers.notFound
}


// start server
server.listen(config.httpPort, () => {
  console.log(`The server is running on port ${config.httpPort}`)
})

// start server
httpsServer.listen(config.httpsPort, () => {
  console.log(`The server is running on port ${config.httpsPort}`)
})
