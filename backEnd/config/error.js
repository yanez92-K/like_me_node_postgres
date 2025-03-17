const Errors = {
  23502: {
    type: "db",
    status: 400,
    message: "Un campo obligatorio está vacío",
  },
  23505: {
    type: "db",
    status: 409,
    message: "Este registro ya existe",
  },
  23514: {
    type: "db",
    status: 422,
    message: "Valor fuera de los límites permitidos",
  },
  404001: {
    type: "posts",
    status: 404,
    message: "Post no encontrado",
  },
  500000: {
    type: "server",
    status: 500,
    message: "Error interno del servidor",
  },
};

export default Errors;
