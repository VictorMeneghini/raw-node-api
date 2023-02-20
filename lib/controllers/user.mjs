import lib from "../data.mjs"

const userController = {
  create: async (data, req, res) => {
    lib.create("test", "newFile", data)
    .then(() => {
      res.writeHead(200)
      res.end(JSON.stringify({message: "created"}))
    })
    .catch((error) => {
      res.setHeader("Content-Type", "application-json")
      res.writeHead(400)
      console.error(error, "in catch")
      res.end(JSON.stringify({message: error}))
    })
  }
}

export default userController