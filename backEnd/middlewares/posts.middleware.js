import { CreateShemasMiddle } from "./schema/posts.shema.js";

const Createmiddleware = async (req, res, next) => {
  const { error } = CreateShemasMiddle.validate(req.body);
  if (error) {
    res.status(400).json(error.details.map((detail) => detail.message));
  }

  next();
};

export { Createmiddleware };
