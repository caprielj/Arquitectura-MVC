// controllers/clientes.controller.js
// Este archivo contiene toda la lógica de negocio para manejar clientes
// Separa las rutas de la lógica (patrón MVC)

const ClienteModel = require('../models/clientes.model')
const { Op } = require('sequelize') // Operadores de Sequelize para búsquedas

// ===== OPERACIONES CRUD BÁSICAS =====

// Obtener todos los clientes
exports.getClientes = async (req, res) => {
    try {
        // findAll() es el método de Sequelize para SELECT * FROM Clientes
        const clientes = await ClienteModel.findAll()
        res.status(200).json(clientes)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al obtener los clientes'
        })
    }
}

// Crear nuevo cliente
exports.createCliente = async (req, res) => {
    try {
        // Extraemos todos los campos del body
        const { nombre, apellido, email, telefono, direccion, fecha_nacimiento, estado } = req.body
        
        // create() es el método de Sequelize para INSERT INTO
        const cliente = await ClienteModel.create({ 
            nombre, 
            apellido, 
            email, 
            telefono, 
            direccion, 
            fecha_nacimiento, 
            estado: estado || 1 // Si no envían estado, por defecto es 1
        })
        
        res.status(201).json(cliente)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al crear el cliente'
        })
    }
}

// Actualizar cliente por ID
exports.updateCliente = async (req, res) => {
    try {
        const id = req.params.id
        
        // findByPk() busca por Primary Key (id)
        const cliente = await ClienteModel.findByPk(id)
        
        // Validamos si existe el cliente
        if (!cliente) {
            return res.status(404).json({
                error: 'Cliente no encontrado en la base de datos'
            })
        }

        // Extraemos los campos a actualizar
        const { nombre, apellido, email, telefono, direccion, fecha_nacimiento, estado } = req.body
        
        // Actualizamos cada campo
        cliente.nombre = nombre
        cliente.apellido = apellido
        cliente.email = email
        cliente.telefono = telefono
        cliente.direccion = direccion
        cliente.fecha_nacimiento = fecha_nacimiento
        cliente.estado = estado
        
        // save() guarda los cambios en la base de datos (UPDATE)
        await cliente.save()
        
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al actualizar el cliente'
        })
    }
}

// Eliminar cliente por ID
exports.deleteCliente = async (req, res) => {
    try {
        const id = req.params.id
        
        // Buscamos el cliente por ID
        const cliente = await ClienteModel.findByPk(id)
        
        // Validamos si existe
        if (!cliente) {
            return res.status(404).json({
                error: 'Cliente no encontrado en la base de datos'
            })
        }

        // destroy() elimina el registro (DELETE FROM)
        await cliente.destroy()
        
        res.status(200).json({
            message: 'Cliente eliminado correctamente'
        })
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al eliminar el cliente'
        })
    }
}

// ===== BÚSQUEDAS ESPECÍFICAS POR ATRIBUTO =====

// Buscar cliente por ID
exports.getClienteById = async (req, res) => {
    try {
        const id = req.params.id
        const cliente = await ClienteModel.findByPk(id)
        
        if (!cliente) {
            return res.status(404).json({
                error: 'Cliente no encontrado en la base de datos'
            })
        }
        
        res.status(200).json(cliente)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al obtener el cliente'
        })
    }
}

// Buscar clientes por nombre (búsqueda parcial con LIKE)
exports.getClientesByNombre = async (req, res) => {
    try {
        const nombre = req.params.nombre
        
        // findAll con where y Op.like para búsqueda parcial
        // Equivale a: SELECT * FROM Clientes WHERE nombre LIKE '%valor%'
        const clientes = await ClienteModel.findAll({
            where: {
                nombre: {
                    [Op.like]: `%${nombre}%`
                }
            }
        })
        
        res.status(200).json(clientes)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar clientes por nombre'
        })
    }
}

// Buscar clientes por apellido (búsqueda parcial con LIKE)
exports.getClientesByApellido = async (req, res) => {
    try {
        const apellido = req.params.apellido
        
        const clientes = await ClienteModel.findAll({
            where: {
                apellido: {
                    [Op.like]: `%${apellido}%`
                }
            }
        })
        
        res.status(200).json(clientes)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar clientes por apellido'
        })
    }
}

// Buscar clientes por email (búsqueda parcial con LIKE)
exports.getClientesByEmail = async (req, res) => {
    try {
        const email = req.params.email
        
        const clientes = await ClienteModel.findAll({
            where: {
                email: {
                    [Op.like]: `%${email}%`
                }
            }
        })
        
        res.status(200).json(clientes)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar clientes por email'
        })
    }
}

// Buscar clientes por teléfono (búsqueda parcial con LIKE)
exports.getClientesByTelefono = async (req, res) => {
    try {
        const telefono = req.params.telefono
        
        const clientes = await ClienteModel.findAll({
            where: {
                telefono: {
                    [Op.like]: `%${telefono}%`
                }
            }
        })
        
        res.status(200).json(clientes)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar clientes por teléfono'
        })
    }
}

// Buscar clientes por dirección (búsqueda parcial con LIKE)
exports.getClientesByDireccion = async (req, res) => {
    try {
        const direccion = req.params.direccion
        
        const clientes = await ClienteModel.findAll({
            where: {
                direccion: {
                    [Op.like]: `%${direccion}%`
                }
            }
        })
        
        res.status(200).json(clientes)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar clientes por dirección'
        })
    }
}

// Buscar clientes por fecha de nacimiento (búsqueda exacta)
exports.getClientesByFechaNacimiento = async (req, res) => {
    try {
        const fecha = req.params.fecha
        
        // Búsqueda exacta de fecha (sin LIKE)
        const clientes = await ClienteModel.findAll({
            where: {
                fecha_nacimiento: fecha
            }
        })
        
        res.status(200).json(clientes)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar clientes por fecha de nacimiento'
        })
    }
}

// Buscar clientes por estado (búsqueda exacta)
exports.getClientesByEstado = async (req, res) => {
    try {
        const estado = req.params.estado
        
        // Búsqueda exacta de estado (0 o 1)
        const clientes = await ClienteModel.findAll({
            where: {
                estado: estado
            }
        })
        
        res.status(200).json(clientes)
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'Error al buscar clientes por estado'
        })
    }
}