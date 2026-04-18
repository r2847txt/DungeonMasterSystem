import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "tu_usuario",       // reemplaza con tu usuario de PostgreSQL
  host: "localhost",
  database: "dungeonmaster",
  password: "tu_password",  // reemplaza con tu contraseña
  port: 5432,
});

export default pool;