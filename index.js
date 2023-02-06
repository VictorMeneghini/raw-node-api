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

  // Get HTTP method
  const method = req.method.toLowerCase()
  console.log(method)

  // Send the response
  res.end("hello world")


  // Log the user request path

})


// start server
server.listen(3000, () => {
  console.log("The server is running on port 3000")
})