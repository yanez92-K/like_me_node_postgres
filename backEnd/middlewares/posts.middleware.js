import {
  createShemasMiddle,
  upDateShemasMiddle,
} from "./schema/posts.shema.js";
import { getByposts } from "../src/models/posts.models.js";

const createMiddleware = async (req, res, next) => {
  const { error } = createShemasMiddle.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((detail) => detail.message) });
  }
  next();
};

const upDateMiddleware = async (req, res, next) => {
  const { id } = req.params;

  // Validar los datos del cuerpo de la petición
  const { error } = upDateShemasMiddle.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ errors: error.details.map((detail) => detail.message) });
  }
  const posts = await getByposts(id);
  if (!posts) {
    res.status(404).json({ message: "no encontrado" });
  }
  req.oldData = posts;
  next();
};

export { createMiddleware, upDateMiddleware };
