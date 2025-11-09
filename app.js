const express = require('express');
require('dotenv').config();

const sequelize = require('./db/db')

// Importar todos los modelos (necesario para que Sequelize los reconozca)
const AutorModel = require('./models/autor.model')
const ClienteModel = require('./models/clientes.model')
const EditorialModel = require('./models/editoriales.model')
const GeneroModel = require('./models/generos.model')

// Importar todas las rutas
const autorRoutes = require('./routes/autor.routes')
const clientesRoutes = require('./routes/clientes.routes')
const editorialesRoutes = require('./routes/editoriales.routes')
const generosRoutes = require('./routes/generos.routes')

const app = express()

app.use(express.json())

// ===== REGISTRAR TODAS LAS RUTAS =====
// Cada router maneja sus propios endpoints
app.use('/', autorRoutes)        // Rutas de autores
app.use('/', clientesRoutes)     // Rutas de clientes
app.use('/', editorialesRoutes)  // Rutas de editoriales
app.use('/', generosRoutes)      // Rutas de géneros

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Base de datos conectada')
  })
}).catch(err => {
  console.error('Error al conectar la base de datos', err)
})