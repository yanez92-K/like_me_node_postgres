import pkg from "pg";
import { envs } from "../envs.js";

const { Pool } = pkg;

const pool = new Pool({
  host: envs.host_DB,
  user: envs.user_DB,
  password: envs.password_DB,
  database: envs.dataBase,
  allowExitOnIdle: true,
});

export { pool };
