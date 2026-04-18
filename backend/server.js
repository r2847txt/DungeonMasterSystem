import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// --- Rutas personajes ---
app.get("/api/characters", async (req, res) => {
  const result = await pool.query("SELECT * FROM characters");
  res.json(result.rows);
});

app.post("/api/characters", async (req, res) => {
  const { name, class: charClass, level, hp, experience, skills } = req.body;
  const result = await pool.query(
    "INSERT INTO characters (name, class, level, hp, experience, skills) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [name, charClass, level, hp, experience || 0, skills || null]
  );
  res.status(201).json(result.rows[0]);
});

// --- Rutas campañas ---
app.get("/api/campaigns", async (req, res) => {
  const result = await pool.query("SELECT * FROM campaigns");
  res.json(result.rows);
});

app.post("/api/campaigns", async (req, res) => {
  const { title, description, start_date, status } = req.body;
  const result = await pool.query(
    "INSERT INTO campaigns (title, description, start_date, status) VALUES ($1, $2, $3, $4) RETURNING *",
    [title, description, start_date || null, status || "pendiente"]
  );
  res.status(201).json(result.rows[0]);
});

app.listen(4000, () => {
  console.log("Backend corriendo en http://localhost:4000");
});
