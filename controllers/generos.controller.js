// controllers/generos.controller.js
// Este archivo contiene toda la lógica de negocio para manejar géneros
// Separa las rutas de la lógica (patrón MVC)

const GeneroModel = require('../models/generos.model')
const { Op } = require('sequelize') // Operadores de Sequelize para búsquedas

// ===== OPERACIONES CRUD BÁSICAS =====

// Obtener todos los géneros
exports.getGeneros = async (req, res) => {
    try {
        // findAll() es el método de Sequelize para SELECT * FROM Generos
        const generos = await GeneroModel.findAll()
        res.status(200).json(generos)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al obtener los géneros'
        })
    }
}

// Crear nuevo género
exports.createGenero = async (req, res) => {
    try {
        // Extraemos los campos del body
        const { nombre, estado } = req.body
        
        // create() es el método de Sequelize para INSERT INTO
        const genero = await GeneroModel.create({ 
            nombre, 
            estado: estado || 1 // Si no envían estado, por defecto es 1
        })
        
        res.status(201).json(genero)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al crear el género'
        })
    }
}

// Actualizar género por ID
exports.updateGenero = async (req, res) => {
    try {
        const id = req.params.id
        
        // findByPk() busca por Primary Key (id)
        const genero = await GeneroModel.findByPk(id)
        
        // Validamos si existe el género
        if (!genero) {
            return res.status(404).json({
                error: 'Género no encontrado en la base de datos'
            })
        }

        // Extraemos los campos a actualizar
        const { nombre, estado } = req.body
        
        // Actualizamos cada campo
        genero.nombre = nombre
        genero.estado = estado
        
        // save() guarda los cambios en la base de datos (UPDATE)
        await genero.save()
        
        res.status(200).json(genero)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al actualizar el género'
        })
    }
}

// Eliminar género por ID
exports.deleteGenero = async (req, res) => {
    try {
        const id = req.params.id
        
        // Buscamos el género por ID
        const genero = await GeneroModel.findByPk(id)
        
        // Validamos si existe
        if (!genero) {
            return res.status(404).json({
                error: 'Género no encontrado en la base de datos'
            })
        }

        // destroy() elimina el registro (DELETE FROM)
        await genero.destroy()
        
        res.status(200).json({
            message: 'Género eliminado correctamente'
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al eliminar el género'
        })
    }
}

// ===== BÚSQUEDAS ESPECÍFICAS POR ATRIBUTO =====

// Buscar género por ID
exports.getGeneroById = async (req, res) => {
    try {
        const id = req.params.id
        const genero = await GeneroModel.findByPk(id)
        
        if (!genero) {
            return res.status(404).json({
                error: 'Género no encontrado en la base de datos'
            })
        }
        
        res.status(200).json(genero)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al obtener el género'
        })
    }
}

// Buscar géneros por nombre (búsqueda parcial con LIKE)
exports.getGenerosByNombre = async (req, res) => {
    try {
        const nombre = req.params.nombre
        
        // findAll con where y Op.like para búsqueda parcial
        // Equivale a: SELECT * FROM Generos WHERE nombre LIKE '%valor%'
        const generos = await GeneroModel.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${nombre}%`
                }
            }
        })
        
        res.status(200).json(generos)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar géneros por nombre'
        })
    }
}

// Buscar géneros por estado (búsqueda exacta)
exports.getGenerosByEstado = async (req, res) => {
    try {
        const estado = req.params.estado
        
        // Búsqueda exacta de estado (0 o 1)
        const generos = await GeneroModel.findAll({
            where: {
                estado: estado
            }
        })
        
        res.status(200).json(generos)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar géneros por estado'
        })
    }
}