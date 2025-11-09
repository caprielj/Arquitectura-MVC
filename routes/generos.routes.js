// routes/generos.routes.js
// Este archivo solo define las rutas (endpoints)
// La lógica está en el controlador (separación de responsabilidades)

const express = require('express')
const router = express.Router()
const generosController = require('../controllers/generos.controller')

// ===== RUTAS CRUD BÁSICO =====

// GET - Obtener todos los géneros
// Endpoint: GET http://localhost:3000/generos
router.get('/generos', generosController.getGeneros)

// POST - Crear nuevo género
// Endpoint: POST http://localhost:3000/generos
router.post('/generos', generosController.createGenero)

// PUT - Actualizar género por ID
// Endpoint: PUT http://localhost:3000/generos/1
router.put('/generos/:id', generosController.updateGenero)

// DELETE - Eliminar género por ID
// Endpoint: DELETE http://localhost:3000/generos/1
router.delete('/generos/:id', generosController.deleteGenero)

// ===== RUTAS DE BÚSQUEDA POR ATRIBUTOS =====

// GET - Buscar género por ID específico
// Endpoint: GET http://localhost:3000/generos/id/1
router.get('/generos/id/:id', generosController.getGeneroById)

// GET - Buscar géneros por nombre
// Endpoint: GET http://localhost:3000/generos/nombre/Terror
router.get('/generos/nombre/:nombre', generosController.getGenerosByNombre)

// GET - Buscar géneros por estado
// Endpoint: GET http://localhost:3000/generos/estado/1
router.get('/generos/estado/:estado', generosController.getGenerosByEstado)

// Exportamos el router para usarlo en app.js
module.exports = router