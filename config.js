// container for all enviroments
const environments = {

}

// Staging (default) environment

environments.staging = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: "staging"
}

// Production environment
environments.production = {
  httpPort: 5000,
  httpsPort: 50001,
  envName: "production"
}

// Dertemine which enviroment was passed as a command-line argument
const currentEnvironment = process.env.NODE_ENV === "production" ? "production" : "staging"


module.exports = environments[currentEnvironment]