import express from "express";
import cors from "cors";
import { envs } from "./config/envs.js";
import routesPosts from "./routes/posts.routes.js";


const app = express();
const port = envs.port;

app.use(cors('*'));
app.use(express.json());


app.listen(port, console.log(`Servidor encendido en el puerto! ${port}`));

app.use("/api", routesPosts);