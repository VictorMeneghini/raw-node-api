// Dependencies
const http = require("http")

const server = http.createServer((req, res) => {
  console.log(req)


  res.statusCode = 200
  res.end("hello world")
})

server.listen(3000, () => {
  console.log("The server is running on port 3000")
})