// routes/clientes.routes.js
// Este archivo solo define las rutas (endpoints)
// La lógica está en el controlador (separación de responsabilidades)

const express = require('express')
const router = express.Router()
const clientesController = require('../controllers/clientes.controller')

// ===== RUTAS CRUD BÁSICO =====

// GET - Obtener todos los clientes
// Endpoint: GET http://localhost:3000/clientes
router.get('/clientes', clientesController.getClientes)

// POST - Crear nuevo cliente
// Endpoint: POST http://localhost:3000/clientes
router.post('/clientes', clientesController.createCliente)

// PUT - Actualizar cliente por ID
// Endpoint: PUT http://localhost:3000/clientes/1
router.put('/clientes/:id', clientesController.updateCliente)

// DELETE - Eliminar cliente por ID
// Endpoint: DELETE http://localhost:3000/clientes/1
router.delete('/clientes/:id', clientesController.deleteCliente)

// ===== RUTAS DE BÚSQUEDA POR ATRIBUTOS =====

// GET - Buscar cliente por ID específico
// Endpoint: GET http://localhost:3000/clientes/id/1
router.get('/clientes/id/:id', clientesController.getClienteById)

// GET - Buscar clientes por nombre
// Endpoint: GET http://localhost:3000/clientes/nombre/Juan
router.get('/clientes/nombre/:nombre', clientesController.getClientesByNombre)

// GET - Buscar clientes por apellido
// Endpoint: GET http://localhost:3000/clientes/apellido/Perez
router.get('/clientes/apellido/:apellido', clientesController.getClientesByApellido)

// GET - Buscar clientes por email
// Endpoint: GET http://localhost:3000/clientes/email/juan@example.com
router.get('/clientes/email/:email', clientesController.getClientesByEmail)

// GET - Buscar clientes por teléfono
// Endpoint: GET http://localhost:3000/clientes/telefono/12345678
router.get('/clientes/telefono/:telefono', clientesController.getClientesByTelefono)

// GET - Buscar clientes por dirección
// Endpoint: GET http://localhost:3000/clientes/direccion/Calle
router.get('/clientes/direccion/:direccion', clientesController.getClientesByDireccion)

// GET - Buscar clientes por fecha de nacimiento
// Endpoint: GET http://localhost:3000/clientes/fecha_nacimiento/1990-01-01
router.get('/clientes/fecha_nacimiento/:fecha', clientesController.getClientesByFechaNacimiento)

// GET - Buscar clientes por estado
// Endpoint: GET http://localhost:3000/clientes/estado/1
router.get('/clientes/estado/:estado', clientesController.getClientesByEstado)

// Exportamos el router para usarlo en app.js
module.exports = router