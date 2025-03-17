import {
  getPostsSql,
  addPosts,
  deletePostSql,
  getByposts,
  updatePostSql,
} from "../models/posts.models.js";
import { findError } from "../util/fin.error.utils.js";


const getPosts = async (req, res) => {
  try {
    const post = await getPostsSql();
    res.status(200).json(post);
  } catch (error) {
    const errorFound = findError(error.code);
    return res.status(errorFound.status).json({
      error: errorFound.message,
      type: errorFound.type,
    });
  }
};

const createPosts = async (req, res) => {
  try {
    const { titulo, img, descripcion, likes } = req.body;

    if (!titulo || !img || !descripcion) {
      return res
        .status(400)
        .json({ error: "Todos los campos son obligatorios" });
    }

    const post = await addPosts(titulo, img, descripcion, likes || 0);

    return res.status(201).json({ message: "Post creado exitosamente", post });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error interno del servidor", details: error.message });
  }
};


const deletePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deletePostSql(id);

    // Si no se eliminó nada, significa que el post no existe
    if (!deleted) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    return res.status(200).json({ message: "Post eliminado exitosamente" });
  } catch (error) {
    const errorFound = findError(error.code);
    return res.status(errorFound.status).json({
      error: errorFound.message,
      type: errorFound.type,
    });
  }
};


const updatePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, img, descripcion, likes } = req.body;

    // Verificar si el post existe
    const existingPost = await getByposts(id);
    if (!existingPost) {
      return res.status(404).json({ message: "Post no encontrado" });
    }

    // Si un campo no se envía en el request, mantener su valor anterior
    const newTitulo = titulo !== undefined ? titulo : existingPost.titulo;
    const newImg = img !== undefined ? img : existingPost.img;
    const newDescripcion =
      descripcion !== undefined ? descripcion : existingPost.descripcion;
    const newLikes = likes !== undefined ? likes : existingPost.likes + 1;


    // Actualizar el post
    const updatedPost = await updatePostSql(
      newTitulo,
      newImg,
      newDescripcion,
      newLikes,
      id
    );

    return res.status(200).json({
      message: "Post actualizado exitosamente",
      post: updatedPost,
    });
  } catch (error) {
    const errorFound = findError(error.code);
    return res.status(errorFound.status).json({
      error: errorFound.message,
      type: errorFound.type,
    });
  }
};

export { getPosts, createPosts, deletePosts, updatePosts };
