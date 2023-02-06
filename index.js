// Dependencies
const http = require("http")
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
  console.log(queryStringObject)

  // Get HTTP method
  const method = req.method.toLowerCase()
  console.log(method)

  // Send the response
  res.end("hello world")

  // Get the headers

  const headers = req.headers
  console.log(headers)


  // Log the user request path

})


// start server
server.listen(3000, () => {
  console.log("The server is running on port 3000")
})