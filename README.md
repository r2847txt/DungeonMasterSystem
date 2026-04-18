# DMS - Dungeon Master System
## 🎲 Descripción
DungeeonMasterSystem es una aplicación multiplataforma diseñada para facilitar partidas de rol en línea.  
El objetivo es que el Dungeon Master (DM) pueda dirigir la sesión desde un notebook, mientras los jugadores se conectan desde sus teléfonos o navegadores web.

## ✨ Características principales
- Hoja de personaje digital editable.
- Tiradas de dados en tiempo real sincronizadas entre todos los jugadores.
- Chat narrativo para interacción durante la partida.
- Panel de control para el Dungeon Master con notas privadas y gestión de PNJ.
- Tablero opcional para combates y exploración táctica.

## 🏗️ Arquitectura
- **Frontend**: React (PWA responsiva para notebook y móviles).
- **Backend**: Node.js con Socket.IO para sincronización en tiempo real.
- **Base de datos**: PostgreSQL para persistencia y Redis para cache de estados.
- **CI/CD**: GitHub Actions para pruebas y despliegue automático en Vercel/Render.

## 🚀 Roadmap
1. **MVP**: login básico, creación de personajes, tiradas compartidas.
2. **Beta**: tablero opcional, chat narrativo, control de iniciativa.
3. **Versión completa**: ambientación multimedia, escalabilidad en la nube, roles avanzados para el DM.

## 📦 Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/r2847txt/DungeonMasterSystem.git
2. Instalar dependencias:
   ```bash
   cd DungeonMasterSystem
   npm install
3. Ejecutar en el modo desarrollo:
   ```bash
   npm run dev

## Contribución
- Usa Issues para reportar bugs o proponer mejoras.
- Crea ramas con el formato feature/nombre-funcionalidad.
- Envía Pull Requests para revisión antes de integrar en main.
