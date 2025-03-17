import pg from "pg";
import { envs } from "../envs.js";

const { Pool } = pg;

const pool = new Pool({
  host: envs.host_DB,
  user: envs.user_DB,
  password: envs.password_DB,
  database: envs.dataBase,
  allowExitOnIdle: true,
});

export { pool };
