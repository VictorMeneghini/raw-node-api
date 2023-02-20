// container for all enviroments
const environments = {
}

// development (default) environment

environments.development = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: "staging"
}

// Production environment
environments.production = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: "production"
}

// Determine which environment was passed as a command-line argument
const currentEnvironment = process.env.NODE_ENV === "production" ? "production" : "development"


export default environments[currentEnvironment]