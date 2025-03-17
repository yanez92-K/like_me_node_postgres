import Joi from "joi";

const createShemasMiddle = Joi.object({
  titulo: Joi.string().required(),
  img: Joi.string().required(),
  descripcion: Joi.string().required(),
  likes: Joi.number().required(),
});

const upDateShemasMiddle = Joi.object({
  titulo: Joi.string().optional(),
  img: Joi.string().optional(),
  descripcion: Joi.string().optional(),
  likes: Joi.number().optional(),
});

export { createShemasMiddle, upDateShemasMiddle };
