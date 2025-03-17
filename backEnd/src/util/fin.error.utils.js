import Errors from "../../config/error.js";

const findError = (code) => {
  return (
    Errors[code] || {
      type: "server",
      status: 500,
      message: "Error desconocido",
    }
  );
};

export { findError };
