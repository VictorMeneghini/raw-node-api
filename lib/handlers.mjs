import userController from "./controllers/user.mjs"

const acceptableMethods = ["post", "get", "put", "delete"]

// handlers 
const handlers = {
  users: (data, req, res) => {
    userController.create(data, req, res)
  }
}

export default handlers