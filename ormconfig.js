module.exports = {
  "type": "mysql",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "synchronize": true,
  "logging": false,
  "entities": [
    "src/database/entity/**/*.ts"
  ],
  "migrations": [
    "src/database/migration/**/*.ts"
  ],
  "subscribers": [
    "src/database/subscriber/**/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/database/entity",
    "migrationsDir": "src/database/migration",
    "subscribersDir": "src/database/subscriber"
  }
}