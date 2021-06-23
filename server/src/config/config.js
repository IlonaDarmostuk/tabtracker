const path = require('path')

module.exports = {
  port:  process.env.PORT || 8081,
  db: {
    database: process.env.DB_name || 'tabtracker',
    user: process.env.DB_name || 'tabtracker',
    password: process.env.password || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'sqlite',
      storage: path.resolve(__dirname, '../../tabtracker.sqlite')
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
