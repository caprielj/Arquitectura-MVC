// models/autor.model.js
// Este archivo define la estructura de la tabla Autor en la base de datos
// Usamos Sequelize ORM para mapear la tabla a un objeto JavaScript

const { DataTypes } = require('sequelize')
const db = require('../db/db') // Importamos la conexión a la base de datos

// Definimos el modelo Autor con sus campos
const Autor = db.define('Autor', {
    // Campo nombre - texto de máximo 100 caracteres, obligatorio
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    // Campo estado - número pequeño (0 o 1), obligatorio
    estado: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1 // Por defecto el autor estará activo (1)
    }
}, {
    tableName: 'Autor', // Nombre exacto de la tabla en la base de datos
    timestamps: false   // No usar campos createdAt y updatedAt automáticos
})

// Exportamos el modelo para usarlo en los controladores
module.exports = Autor