// Dependencies
const http = require("http")
const { StringDecoder } = require("string_decoder")
const url = require("url")

// Server
const server = http.createServer((req, res) => {

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

  req.on("data", (data) => {
    console.log(data)
    buffer += decoder.write(data)
    console.log(buffer, "on data")
  })

  req.on("end", () => {
    buffer += decoder.end()

    // Send the response
    console.log(buffer, "on end")
    res.end("hello world")
  })

  // Get the headers
  const headers = req.headers
  // console.log(headers)

})

// handlers 
const handlers = {
  sample: (data, cb) => {
    //cb a http status code, and a payload object
    cb(406, {"name": "sample handler"})

  },
  notFound: (data, cb) => {
    cb(404)
  }
}

const router = {
  "sample": handlers.sample
}


handlers.sample("my data", (statusCode) => {
  console.log(statusCode)
})

// start server
server.listen(3000, () => {
  console.log("The server is running on port 3000")
})