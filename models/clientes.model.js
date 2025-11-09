// models/clientes.model.js
// Este archivo define la estructura de la tabla Clientes en la base de datos
// Usamos Sequelize ORM para mapear la tabla a un objeto JavaScript

const { DataTypes } = require('sequelize')
const db = require('../db/db') // Importamos la conexión a la base de datos

// Definimos el modelo Cliente con todos sus campos
const Cliente = db.define('Cliente', {
    // Campo nombre - texto de máximo 100 caracteres, obligatorio
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    // Campo apellido - texto de máximo 100 caracteres, obligatorio
    apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    // Campo email - texto de máximo 150 caracteres, obligatorio
    email: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    // Campo teléfono - texto de máximo 20 caracteres, opcional
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: true
    },
    // Campo dirección - texto de máximo 255 caracteres, opcional
    direccion: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    // Campo fecha de nacimiento - tipo DATE, opcional
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    // Campo estado - número pequeño (0 o 1), obligatorio
    estado: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1 // Por defecto el cliente estará activo (1)
    }
}, {
    tableName: 'Clientes', // Nombre exacto de la tabla en la base de datos
    timestamps: false // No usar campos createdAt y updatedAt automáticos
})

// Exportamos el modelo para usarlo en los controladores
module.exports = Cliente