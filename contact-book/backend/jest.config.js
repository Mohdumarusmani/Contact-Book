module.exports = {
    testEnvironment: "node",
    coveragePathIgnorePatterns: [
      "/node_modules/"
    ],
    moduleNameMapper: {
       "app/index" :        "<rootDir>/dist",
       "config/index":      "<rootDir>/dist/config",
       "middlewares/index": "<rootDir>/dist/middlewares",
       "routes/index":      "<rootDir>/dist/routes",
       "utils/index":       "<rootDir>/dist/utils",
       "types/index":       "<rootDir>/dist/@types",
       "database/index":    "<rootDir>/dist/database",
       "models/index":      "<rootDir>/dist/models",
       "controllers/index": "<rootDir>/dist/controllers"
     }
  }