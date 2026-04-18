import React, { useState } from "react";
import { createCharacter } from "../api/characters";

interface Character {
  name: string;
  class: string;
  level: number;
  hp: number;
}

const CharacterSheet: React.FC = () => {
  const [character, setCharacter] = useState<Character>({
    name: "",
    class: "",
    level: 1,
    hp: 10,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCharacter({
      ...character,
      [name]: name === "level" || name === "hp" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const saved = await createCharacter(character);
    alert(`Personaje guardado: ${saved.name} (${saved.class})`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={character.name} onChange={handleChange} placeholder="Nombre" />
      <input name="class" value={character.class} onChange={handleChange} placeholder="Clase" />
      <input name="level" type="number" value={character.level} onChange={handleChange} />
      <input name="hp" type="number" value={character.hp} onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default CharacterSheet;
