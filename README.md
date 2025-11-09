# Sistema de Gestión - Arquitectura MVC

API RESTful desarrollada con Node.js, Express y Sequelize siguiendo el patrón de diseño MVC (Modelo-Vista-Controlador).

## 🚀 Características

- ✅ CRUD completo de Clientes
- ✅ CRUD completo de Autores
- ✅ CRUD completo de Editoriales
- ✅ CRUD completo de Géneros
- ✅ Búsquedas avanzadas con filtros
- ✅ Búsquedas parciales usando LIKE
- ✅ Arquitectura MVC organizada
- ✅ ORM Sequelize para manejo de base de datos
- ✅ Validaciones y manejo de errores

## 📋 Requisitos Previos

- Node.js (v14 o superior)
- MySQL (v5.7 o superior)
- npm o yarn

## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/caprielj/Arquitectura-MVC.git
cd Arquitectura-MVC
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=tu_base_datos
DB_PORT=3306
PORT=3000
```

4. **Crear la base de datos**

Ejecuta el script SQL en tu gestor de MySQL:

```sql
CREATE DATABASE tu_base_datos;
USE tu_base_datos;

CREATE TABLE Autor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    estado TINYINT NOT NULL DEFAULT 1
);

CREATE TABLE Clientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    direccion VARCHAR(200),
    fecha_nacimiento DATE,
    estado TINYINT NOT NULL DEFAULT 1
);

CREATE TABLE Editorial (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    estado TINYINT NOT NULL DEFAULT 1
);

CREATE TABLE Genero (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    estado TINYINT NOT NULL DEFAULT 1
);
```

5. **Iniciar el servidor**

```bash
npm start
```

El servidor estará corriendo en `http://localhost:3000`

## 📁 Estructura del Proyecto

```
cliente-servidor-base/
├── controllers/           # Lógica de negocio
│   ├── autor.controller.js
│   ├── clientes.controller.js
│   ├── editoriales.controller.js
│   └── generos.controller.js
├── models/               # Modelos de datos (Sequelize)
│   ├── autor.model.js
│   ├── clientes.model.js
│   ├── editoriales.model.js
│   └── generos.model.js
├── routes/               # Definición de rutas
│   ├── autor.routes.js
│   ├── clientes.routes.js
│   ├── editoriales.routes.js
│   └── generos.routes.js
├── db/                   # Configuración de base de datos
│   └── db.js
├── .env.example          # Variables de entorno de ejemplo
├── .gitignore           # Archivos ignorados por Git
├── app.js               # Configuración de Express
└── package.json         # Dependencias del proyecto
```

## 🛣️ Endpoints API

### Autores

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/autores` | Obtener todos los autores |
| GET | `/autores/:id` | Obtener autor por ID |
| POST | `/autores/buscar` | Buscar autor por nombre |
| POST | `/autores` | Crear nuevo autor |
| PUT | `/autores/:id` | Actualizar autor |
| DELETE | `/autores/:id` | Eliminar autor |

### Clientes

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/clientes` | Obtener todos los clientes |
| GET | `/clientes/:id` | Obtener cliente por ID |
| GET | `/clientes/nombre/:nombre` | Buscar por nombre |
| GET | `/clientes/apellido/:apellido` | Buscar por apellido |
| GET | `/clientes/email/:email` | Buscar por email |
| GET | `/clientes/telefono/:telefono` | Buscar por teléfono |
| GET | `/clientes/direccion/:direccion` | Buscar por dirección |
| GET | `/clientes/fecha/:fecha` | Buscar por fecha de nacimiento |
| GET | `/clientes/estado/:estado` | Buscar por estado |
| POST | `/clientes` | Crear nuevo cliente |
| PUT | `/clientes/:id` | Actualizar cliente |
| DELETE | `/clientes/:id` | Eliminar cliente |

### Editoriales

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/editoriales` | Obtener todas las editoriales |
| GET | `/editoriales/:id` | Obtener editorial por ID |
| POST | `/editoriales` | Crear nueva editorial |
| PUT | `/editoriales/:id` | Actualizar editorial |
| DELETE | `/editoriales/:id` | Eliminar editorial |

### Géneros

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/generos` | Obtener todos los géneros |
| GET | `/generos/:id` | Obtener género por ID |
| POST | `/generos` | Crear nuevo género |
| PUT | `/generos/:id` | Actualizar género |
| DELETE | `/generos/:id` | Eliminar género |

## 📝 Ejemplos de Uso

### Crear un cliente

```bash
POST http://localhost:3000/clientes
Content-Type: application/json

{
  "nombre": "Juan",
  "apellido": "Pérez",
  "email": "juan@example.com",
  "telefono": "12345678",
  "direccion": "Calle Principal 123",
  "fecha_nacimiento": "1990-05-15",
  "estado": 1
}
```

### Buscar clientes por nombre

```bash
GET http://localhost:3000/clientes/nombre/Juan
```

### Actualizar un autor

```bash
PUT http://localhost:3000/autores/1
Content-Type: application/json

{
  "nombre": "Gabriel García Márquez",
  "estado": 1
}
```

### Crear una editorial

```bash
POST http://localhost:3000/editoriales
Content-Type: application/json

{
  "nombre": "Editorial Planeta",
  "estado": 1
}
```

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **Sequelize** - ORM para MySQL
- **MySQL** - Base de datos
- **dotenv** - Gestión de variables de entorno
- **nodemon** - Reinicio automático en desarrollo

## 👨‍💻 Autor

**Gabriel Capriel**
- GitHub: [@caprielj](https://github.com/caprielj)

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

Para preguntas o sugerencias, abre un issue en el repositorio.

---

**Nota**: Asegúrate de configurar correctamente tu archivo `.env` con las credenciales de tu base de datos antes de ejecutar el proyecto.
