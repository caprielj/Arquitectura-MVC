// routes/editoriales.routes.js
// Este archivo solo define las rutas (endpoints)
// La lógica está en el controlador (separación de responsabilidades)

const express = require('express')
const router = express.Router()
const editorialesController = require('../controllers/editoriales.controller')

// ===== RUTAS CRUD BÁSICO =====

// GET - Obtener todas las editoriales
// Endpoint: GET http://localhost:3000/editoriales
router.get('/editoriales', editorialesController.getEditoriales)

// POST - Crear nueva editorial
// Endpoint: POST http://localhost:3000/editoriales
router.post('/editoriales', editorialesController.createEditorial)

// PUT - Actualizar editorial por ID
// Endpoint: PUT http://localhost:3000/editoriales/1
router.put('/editoriales/:id', editorialesController.updateEditorial)

// DELETE - Eliminar editorial por ID
// Endpoint: DELETE http://localhost:3000/editoriales/1
router.delete('/editoriales/:id', editorialesController.deleteEditorial)

// ===== RUTAS DE BÚSQUEDA POR ATRIBUTOS =====

// GET - Buscar editorial por ID específico
// Endpoint: GET http://localhost:3000/editoriales/id/1
router.get('/editoriales/id/:id', editorialesController.getEditorialById)

// GET - Buscar editoriales por nombre
// Endpoint: GET http://localhost:3000/editoriales/nombre/Planeta
router.get('/editoriales/nombre/:nombre', editorialesController.getEditorialesByNombre)

// GET - Buscar editoriales por país
// Endpoint: GET http://localhost:3000/editoriales/pais/Guatemala
router.get('/editoriales/pais/:pais', editorialesController.getEditorialesByPais)

// GET - Buscar editoriales por ciudad
// Endpoint: GET http://localhost:3000/editoriales/ciudad/Guatemala
router.get('/editoriales/ciudad/:ciudad', editorialesController.getEditorialesByCiudad)

// GET - Buscar editoriales por dirección
// Endpoint: GET http://localhost:3000/editoriales/direccion/Avenida
router.get('/editoriales/direccion/:direccion', editorialesController.getEditorialesByDireccion)

// GET - Buscar editoriales por teléfono
// Endpoint: GET http://localhost:3000/editoriales/telefono/12345678
router.get('/editoriales/telefono/:telefono', editorialesController.getEditorialesByTelefono)

// GET - Buscar editoriales por email
// Endpoint: GET http://localhost:3000/editoriales/email/info@editorial.com
router.get('/editoriales/email/:email', editorialesController.getEditorialesByEmail)

// GET - Buscar editoriales por estado
// Endpoint: GET http://localhost:3000/editoriales/estado/1
router.get('/editoriales/estado/:estado', editorialesController.getEditorialesByEstado)

// Exportamos el router para usarlo en app.js
module.exports = router