import { pool } from "../../config/db/conection.db.js";

const getPostsSql = async () => {
  const SQLquery = {
    text: "SELECT * FROM posts",
  };
  const result = await pool.query(SQLquery);
  return result.rows;
};

const addPosts = async (titulo, img, descripcion, likes) => {
  const SQLquery = {
    text: "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *",
    values: [titulo, img, descripcion, likes],
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};

const updatePostSql = async (titulo, img, descripcion, likes, id) => {
  try {
    // Verificar si el post existe antes de actualizar
    const oldData = await getByposts(id);
    if (!oldData) {
      return null; 
    }

    // Si no se envían nuevos valores, usar los existentes
    const newTitulo = titulo !== undefined ? titulo : oldData.titulo;
    const newImg = img !== undefined ? img : oldData.img;
    const newDescripcion =
      descripcion !== undefined ? descripcion : oldData.descripcion;
    const newLikes = likes !== undefined ? likes : oldData.likes; // Asegurar que los likes puedan ser 0

    const SQLquery = {
      text: "UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4 WHERE id = $5 RETURNING *",
      values: [newTitulo, newImg, newDescripcion, newLikes, id],
    };

    const result = await pool.query(SQLquery);

    return result.rows[0];
  } catch (error) {
    console.error("Error en updatePostSql:", error.message);
    throw error;
  }
};


const getByposts = async (id) => {
  try {
    // Verificar que el id sea un número válido
    if (isNaN(Number(id))) {
      throw new Error("El id no es válido");
    }

    const SQLquery = {
      text: "SELECT * FROM posts WHERE id = $1",
      values: [Number(id)],
    };

    const response = await pool.query(SQLquery);

    // Si no se encuentra el post, devolver null
    if (!response.rows[0]) {
      return null;
    }

    return response.rows[0]; // Devuelve el post encontrado
  } catch (error) {
    console.error("Error en getByposts:", error.message);
    throw error;
  }
};


const deletePostSql = async (id) => {
  try {
    const SQLquery = {
      text: "DELETE FROM posts WHERE id = $1",
      values: [Number(id)],
    };

    const response = await pool.query(SQLquery);

    // Verificar si realmente se eliminó un post
    if (response.rowCount === 0) {
      console.log(`No se encontró el post con ID: ${id}`);
      return null; 
    }

    console.log(`Post con ID: ${id} eliminado correctamente.`);
    return response.rowCount; // Devuelve el número de filas eliminadas
  } catch (error) {
    console.error("Error en deletePostSql:", error.message);
    throw error;
  }
};


export { getPostsSql, addPosts, deletePostSql, updatePostSql, getByposts };
