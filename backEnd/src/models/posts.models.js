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

export { getPostsSql, addPosts };
