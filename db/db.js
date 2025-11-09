const { Sequelize } = require('sequelize')

//base de datos, usuario, contraseña
const sequelize = new Sequelize('libros', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})

module.exports = sequelize;