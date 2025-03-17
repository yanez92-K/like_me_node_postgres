const Form = ({
  titulo,
  imgSrc,
  descripcion,
  setTitulo,
  setImgSRC,
  setDescripcion,
  agregarPost,
}) => {
  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarPost(); // 🔹 Llama a la función de agregar
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 border rounded bg-primary text-white"
    >
      <h3 className="text-center">Agregar Post</h3>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Título"
          value={titulo} // 🔹 USO DEL ESTADO CONTROLADO
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="URL de la imagen"
          value={imgSrc} // 🔹 USO DEL ESTADO CONTROLADO
          onChange={(e) => setImgSRC(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Descripción"
          value={descripcion} // 🔹 USO DEL ESTADO CONTROLADO
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-light w-50">
        Agregar
      </button>
    </form>
  );
};
