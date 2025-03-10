import { getPostsSql, addPosts } from "../models/posts.models.js";

const getPosts = async (req, res) => {
  try {
    const post = await getPostsSql();
    res.status(201).json(post);
  } catch (error) {
    res.status(401).json(error);
  }
};

const createPosts = async (req, res) => {
  try {
    const { titulo, img, descripcion, likes } = req.body;
    const posts = await addPosts(titulo, img, descripcion, likes);
    return res.status(201).json({ message: "ha sido creado exitosamente" });
  } catch (error) {
    if (!res.headersSent) {
      return res
        .status(500)
        .json({ error: "Error interno del servidor", details: error.message });
    }
  }
};

export { getPosts, createPosts };
