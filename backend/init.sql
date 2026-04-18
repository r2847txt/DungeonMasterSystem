-- Conectarse a la base de datos dungeonmaster
\c dungeonmaster

-- Crear tabla de personajes si no existe
CREATE TABLE IF NOT EXISTS characters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  class VARCHAR(50),
  level INT,
  hp INT
);

-- Crear tabla de campañas si no existe
CREATE TABLE IF NOT EXISTS campaigns (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  description TEXT
);

-- Insertar personajes de ejemplo
INSERT INTO characters (name, class, level, hp) VALUES
('Aragorn', 'Guerrero', 5, 45),
('Legolas', 'Arquero', 4, 35),
('Gandalf', 'Mago', 10, 80);

-- Insertar campañas de ejemplo
INSERT INTO campaigns (title, description) VALUES
('La Sombra de Mordor', 'Campaña épica contra las fuerzas oscuras'),
('Defensa de Gondor', 'Los héroes deben proteger la ciudad de los orcos'),
('Viaje a Rivendel', 'Una misión diplomática para unir a los elfos');
