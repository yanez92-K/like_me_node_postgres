import Joi from "joi";

const CreateShemasMiddle = Joi.object({
  titulo: Joi.string().required(),
  img: Joi.string().required(),
  descripcion: Joi.string().required(),
  likes: Joi.number().required(),
});

export { CreateShemasMiddle };
