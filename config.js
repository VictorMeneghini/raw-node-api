// container for all enviroments
const environments = {

}

// Staging (default) environment

environments.staging = {
  port: 3000,
  envName: "staging"
}

// Production environment
environments.production = {
  port: 5000,
  envName: "production"
}

// Dertemine which enviroment was passed as a command-line argument
const currentEnvironment = process.env.NODE_ENV === "production" ? "production" : "staging"


module.exports = environments[currentEnvironment]