// controllers/editoriales.controller.js
// Este archivo contiene toda la lógica de negocio para manejar editoriales
// Separa las rutas de la lógica (patrón MVC)

const EditorialModel = require('../models/editoriales.model')
const { Op } = require('sequelize') // Operadores de Sequelize para búsquedas

// ===== OPERACIONES CRUD BÁSICAS =====

// Obtener todas las editoriales
exports.getEditoriales = async (req, res) => {
    try {
        // findAll() es el método de Sequelize para SELECT * FROM Editoriales
        const editoriales = await EditorialModel.findAll()
        res.status(200).json(editoriales)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al obtener las editoriales'
        })
    }
}

// Crear nueva editorial
exports.createEditorial = async (req, res) => {
    try {
        // Extraemos todos los campos del body
        const { nombre, pais, ciudad, direccion, telefono, email, estado } = req.body
        
        // create() es el método de Sequelize para INSERT INTO
        const editorial = await EditorialModel.create({ 
            nombre, 
            pais, 
            ciudad, 
            direccion, 
            telefono, 
            email, 
            estado: estado || 1 // Si no envían estado, por defecto es 1
        })
        
        res.status(201).json(editorial)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al crear la editorial'
        })
    }
}

// Actualizar editorial por ID
exports.updateEditorial = async (req, res) => {
    try {
        const id = req.params.id
        
        // findByPk() busca por Primary Key (id)
        const editorial = await EditorialModel.findByPk(id)
        
        // Validamos si existe la editorial
        if (!editorial) {
            return res.status(404).json({
                error: 'Editorial no encontrada en la base de datos'
            })
        }

        // Extraemos los campos a actualizar
        const { nombre, pais, ciudad, direccion, telefono, email, estado } = req.body
        
        // Actualizamos cada campo
        editorial.nombre = nombre
        editorial.pais = pais
        editorial.ciudad = ciudad
        editorial.direccion = direccion
        editorial.telefono = telefono
        editorial.email = email
        editorial.estado = estado
        
        // save() guarda los cambios en la base de datos (UPDATE)
        await editorial.save()
        
        res.status(200).json(editorial)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al actualizar la editorial'
        })
    }
}

// Eliminar editorial por ID
exports.deleteEditorial = async (req, res) => {
    try {
        const id = req.params.id
        
        // Buscamos la editorial por ID
        const editorial = await EditorialModel.findByPk(id)
        
        // Validamos si existe
        if (!editorial) {
            return res.status(404).json({
                error: 'Editorial no encontrada en la base de datos'
            })
        }

        // destroy() elimina el registro (DELETE FROM)
        await editorial.destroy()
        
        res.status(200).json({
            message: 'Editorial eliminada correctamente'
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al eliminar la editorial'
        })
    }
}

// ===== BÚSQUEDAS ESPECÍFICAS POR ATRIBUTO =====

// Buscar editorial por ID
exports.getEditorialById = async (req, res) => {
    try {
        const id = req.params.id
        const editorial = await EditorialModel.findByPk(id)
        
        if (!editorial) {
            return res.status(404).json({
                error: 'Editorial no encontrada en la base de datos'
            })
        }
        
        res.status(200).json(editorial)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al obtener la editorial'
        })
    }
}

// Buscar editoriales por nombre (búsqueda parcial con LIKE)
exports.getEditorialesByNombre = async (req, res) => {
    try {
        const nombre = req.params.nombre
        
        // findAll con where y Op.like para búsqueda parcial
        // Equivale a: SELECT * FROM Editoriales WHERE nombre LIKE '%valor%'
        const editoriales = await EditorialModel.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${nombre}%`
                }
            }
        })
        
        res.status(200).json(editoriales)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar editoriales por nombre'
        })
    }
}

// Buscar editoriales por país (búsqueda parcial con LIKE)
exports.getEditorialesByPais = async (req, res) => {
    try {
        const pais = req.params.pais
        
        const editoriales = await EditorialModel.findAll({
            where: {
                pais: {
                    [Op.like]: `%${pais}%`
                }
            }
        })
        
        res.status(200).json(editoriales)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar editoriales por país'
        })
    }
}

// Buscar editoriales por ciudad (búsqueda parcial con LIKE)
exports.getEditorialesByCiudad = async (req, res) => {
    try {
        const ciudad = req.params.ciudad
        
        const editoriales = await EditorialModel.findAll({
            where: {
                ciudad: {
                    [Op.like]: `%${ciudad}%`
                }
            }
        })
        
        res.status(200).json(editoriales)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar editoriales por ciudad'
        })
    }
}

// Buscar editoriales por dirección (búsqueda parcial con LIKE)
exports.getEditorialesByDireccion = async (req, res) => {
    try {
        const direccion = req.params.direccion
        
        const editoriales = await EditorialModel.findAll({
            where: {
                direccion: {
                    [Op.like]: `%${direccion}%`
                }
            }
        })
        
        res.status(200).json(editoriales)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar editoriales por dirección'
        })
    }
}

// Buscar editoriales por teléfono (búsqueda parcial con LIKE)
exports.getEditorialesByTelefono = async (req, res) => {
    try {
        const telefono = req.params.telefono
        
        const editoriales = await EditorialModel.findAll({
            where: {
                telefono: {
                    [Op.like]: `%${telefono}%`
                }
            }
        })
        
        res.status(200).json(editoriales)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar editoriales por teléfono'
        })
    }
}

// Buscar editoriales por email (búsqueda parcial con LIKE)
exports.getEditorialesByEmail = async (req, res) => {
    try {
        const email = req.params.email
        
        const editoriales = await EditorialModel.findAll({
            where: {
                email: {
                    [Op.like]: `%${email}%`
                }
            }
        })
        
        res.status(200).json(editoriales)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar editoriales por email'
        })
    }
}

// Buscar editoriales por estado (búsqueda exacta)
exports.getEditorialesByEstado = async (req, res) => {
    try {
        const estado = req.params.estado
        
        // Búsqueda exacta de estado (0 o 1)
        const editoriales = await EditorialModel.findAll({
            where: {
                estado: estado
            }
        })
        
        res.status(200).json(editoriales)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar editoriales por estado'
        })
    }
}