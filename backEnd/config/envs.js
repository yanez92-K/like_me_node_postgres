
import 'dotenv/config'

const envs = {
  port: process.env.PORT,
  host_DB: process.env.HOST,
  user_DB: process.env.USER,
  password_DB: process.env.PASS,
  dataBase: process.env.DATA,
}

export { envs }