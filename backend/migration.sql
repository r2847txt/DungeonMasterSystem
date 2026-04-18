-- Conectarse a la base dungeonmaster
\c dungeonmaster

-- Agregar columna de experiencia a personajes
ALTER TABLE characters
ADD COLUMN experience INT DEFAULT 0;

-- Agregar columna de habilidades (texto libre)
ALTER TABLE characters
ADD COLUMN skills TEXT;

-- Agregar columna de fecha de inicio a campañas
ALTER TABLE campaigns
ADD COLUMN start_date DATE;

-- Agregar columna de estado a campañas
ALTER TABLE campaigns
ADD COLUMN status VARCHAR(20) DEFAULT 'pendiente';
