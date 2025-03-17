# Like Me Social - API

Una API construida con ***Node.js, Express y PostgreSQL*** que permite gestionar publicaciones con funcionalidades de creación, actualización, eliminación y consulta de posts (CRUD).

## Características
- Obtener todos los posts.
- Crear un nuevo post.
- Actualizar un post existente.
- Eliminar un post.
- Almacenar datos en PostgreSQL.

## Instalación y configuración

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/yanez92-K/like_me_node_postgres
cd like-me-social-node
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo `.env` basado en `example.env` y ajusta los valores según tu configuración de PostgreSQL.

```sh
cp example.env .env
```

### 4️⃣ Ejecutar migraciones SQL
Asegúrate de que PostgreSQL está corriendo y ejecuta las migraciones:
```sh
psql -U tu_usuario -d tu_base_de_datos -f db/squema.sql
```

### 5️⃣ Iniciar el servidor
```sh
npm start
```
El servidor correrá en `http://localhost:3000`

## Endpoints de la API

### Obtener todos los posts
```
GET /posts
```
**Respuesta esperada:**
```json
{
  "posts": [
    {
      "id": 1,
      "title": "Mi primer post",
      "image_url": "https://example.com/image.jpg",
      "post_description": "Descripción del post",
      "likes": 1
    }
  ]
}
```

### Crear un nuevo post
```
POST /posts
```
**Body (JSON):**
```json
{
  "title": "Nuevo post",
  "image_url": "https://example.com/image.jpg",
  "post_description": "Descripción del post",
  "likes": 0
}
```

### Actualizar un post
```
PUT /posts/like/:id
```
**Body (JSON):**
```json
{
  "title": "Título actualizado",
  "image_url": "https://example.com/image.jpg",
  "post_description": "Nueva descripción",
  "likes": 10
}
```

### Eliminar un post
```
DELETE /posts/:id
```
**Respuesta esperada:**
```json
{
  "message": "Post eliminado con éxito"
}
```

## Tecnologías utilizadas
- Node.js + Express
- PostgreSQL
- Joi (biblioteca de JavaScript que permite validar esquemas de objetos)
- Dotenv (manejo de variables de entorno)
- Postman para pruebas de API



