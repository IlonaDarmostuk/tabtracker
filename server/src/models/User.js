const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt'))

module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },

    password: DataTypes.STRING
  })
