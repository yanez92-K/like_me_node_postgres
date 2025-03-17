import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";

const urlBaseServer = "http://localhost:3000/api";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSRC] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const { data: posts } = await axios.get(urlBaseServer + "/posts");
      setPosts(posts);
      console.log(posts);
    } catch (error) {
      console.error("Error al obtener posts:", error);
    }
  };
  const agregarPost = async () => {
    try {
      const newPost = { titulo, img: imgSrc, descripcion, likes: 0 };

      await axios.post(urlBaseServer + "/posts", newPost, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("✅ Post agregado con éxito");

      // 🔹 Asegurar actualización de la lista de posts
      await getPosts();

      setTitulo("");
      setImgSRC("");
      setDescripcion("");
    } catch (error) {
      console.error(
        "Error al agregar post:",
        error.response?.data || error.message
      );
    }
  };

  const like = async (id) => {
    try {
      await axios.put(urlBaseServer + `/posts/like/${id}`);
      await getPosts(); // 🔹 Asegura actualización después del like
    } catch (error) {
      console.error("Error al dar like:", error);
    }
  };

  const eliminarPost = async (id) => {
    try {
      await axios.delete(urlBaseServer + `/posts/${id}`);
      await getPosts(); // 🔹 Asegura actualización después de eliminar
    } catch (error) {
      console.error("Error al eliminar post:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    console.log("📢 Lista de posts actualizada:", posts);
  }, [posts]); // Se ejecuta cada vez que posts cambia

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
      <div className="row m-auto px-5">
        <div className="col-12 col-sm-4">
          <Form
            titulo={titulo}
            imgSrc={imgSrc}
            descripcion={descripcion}
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </div>
        <div className="col-12 col-sm-8 px-5 row posts align-items-start">
          {posts.map((post, i) => (
            <Post key={i} post={post} like={like} eliminarPost={eliminarPost} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
