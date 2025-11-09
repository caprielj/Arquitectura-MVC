// models/editoriales.model.js
// Este archivo define la estructura de la tabla Editoriales en la base de datos
// Usamos Sequelize ORM para mapear la tabla a un objeto JavaScript

const { DataTypes } = require('sequelize')
const db = require('../db/db') // Importamos la conexión a la base de datos

// Definimos el modelo Editorial con todos sus campos
const Editorial = db.define('Editorial', {
    // Campo nombre - texto de máximo 150 caracteres, obligatorio
    nombre: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    // Campo país - texto de máximo 100 caracteres, opcional
    pais: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    // Campo ciudad - texto de máximo 100 caracteres, opcional
    ciudad: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    // Campo dirección - texto de máximo 255 caracteres, opcional
    direccion: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    // Campo teléfono - texto de máximo 20 caracteres, opcional
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    // Campo email - texto de máximo 150 caracteres, opcional
    email: {
        type: DataTypes.STRING(150),
        allowNull: true
    },
    // Campo estado - número pequeño (0 o 1), obligatorio
    estado: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1 // Por defecto la editorial estará activa (1)
    }
}, {
    tableName: 'Editoriales', // Nombre exacto de la tabla en la base de datos
    timestamps: false // No usar campos createdAt y updatedAt automáticos
})

// Exportamos el modelo para usarlo en los controladores
module.exports = Editorial