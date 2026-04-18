-- Conectarse a la base dungeonmaster
\c dungeonmaster

-- Eliminar tablas si existen
DROP TABLE IF EXISTS characters CASCADE;
DROP TABLE IF EXISTS campaigns CASCADE;

-- Crear tabla de personajes
CREATE TABLE characters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  class VARCHAR(50),
  level INT,
  hp INT
);

-- Crear tabla de campañas
CREATE TABLE campaigns (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  description TEXT
);

-- Insertar personajes iniciales
INSERT INTO characters (name, class, level, hp) VALUES
('Aragorn', 'Guerrero', 5, 45),
('Legolas', 'Arquero', 4, 35),
('Gandalf', 'Mago', 10, 80);

-- Insertar campañas iniciales
INSERT INTO campaigns (title, description) VALUES
('La Sombra de Mordor', 'Campaña épica contra las fuerzas oscuras'),
('Defensa de Gondor', 'Los héroes deben proteger la ciudad de los orcos'),
('Viaje a Rivendel', 'Una misión diplomática para unir a los elfos');
