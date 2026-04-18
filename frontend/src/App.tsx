import { useEffect, useState } from "react";
import { getCharacters, createCharacter } from "./api/characters";
import { getCampaigns, createCampaign } from "./api/campaigns";
import CharacterSheet from "./components/CharacterSheet";

function App() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [message, setMessage] = useState<string>("");

  // Estados para formularios
  const [newChar, setNewChar] = useState({
    name: "",
    class: "",
    level: 1,
    hp: 10,
    experience: 0,
    skills: "",
  });

  const [newCamp, setNewCamp] = useState({
    title: "",
    description: "",
    start_date: "",
    status: "pendiente",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const chars = await getCharacters();
      const camps = await getCampaigns();
      setCharacters(chars);
      setCampaigns(camps);
    } catch {
      setMessage("Error cargando datos del backend");
    }
  };

  const handleCharChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewChar({
      ...newChar,
      [name]: name === "level" || name === "hp" || name === "experience" ? Number(value) : value,
    });
  };

  const handleCampChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewCamp({ ...newCamp, [name]: value });
  };

  const submitCharacter = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const saved = await createCharacter(newChar);
      setCharacters((prev) => [...prev, saved]);
      setMessage(`✅ Personaje creado: ${saved.name}`);
      setNewChar({ name: "", class: "", level: 1, hp: 10, experience: 0, skills: "" });
    } catch {
      setMessage("❌ Error creando personaje");
    }
  };

  const submitCampaign = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const saved = await createCampaign(newCamp);
      setCampaigns((prev) => [...prev, saved]);
      setMessage(`✅ Campaña creada: ${saved.title}`);
      setNewCamp({ title: "", description: "", start_date: "", status: "pendiente" });
    } catch {
      setMessage("❌ Error creando campaña");
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>DungeeonMasterSystem</h1>

      {message && <p style={{ color: "blue" }}>{message}</p>}

      <h2>Personajes</h2>
      <ul>
        {characters.map((c, i) => (
          <li key={i}>
            {c.name} - {c.class} (Nivel {c.level}, HP {c.hp}, EXP {c.experience})  
            {c.skills && <span> | Habilidades: {c.skills}</span>}
          </li>
        ))}
      </ul>

      <form onSubmit={submitCharacter}>
        <input name="name" value={newChar.name} onChange={handleCharChange} placeholder="Nombre" />
        <input name="class" value={newChar.class} onChange={handleCharChange} placeholder="Clase" />
        <input name="level" type="number" value={newChar.level} onChange={handleCharChange} />
        <input name="hp" type="number" value={newChar.hp} onChange={handleCharChange} />
        <input name="experience" type="number" value={newChar.experience} onChange={handleCharChange} />
        <input name="skills" value={newChar.skills} onChange={handleCharChange} placeholder="Habilidades" />
        <button type="submit">Crear personaje</button>
      </form>

      <h2>Campañas</h2>
      <ul>
        {campaigns.map((c, i) => (
          <li key={i}>
            {c.title} - {c.description}  
            {c.start_date && <span> | Inicio: {c.start_date}</span>}  
            {c.status && <span> | Estado: {c.status}</span>}
          </li>
        ))}
      </ul>

      <form onSubmit={submitCampaign}>
        <input name="title" value={newCamp.title} onChange={handleCampChange} placeholder="Título" />
        <input name="description" value={newCamp.description} onChange={handleCampChange} placeholder="Descripción" />
        <input name="start_date" type="date" value={newCamp.start_date} onChange={handleCampChange} />
        <select name="status" value={newCamp.status} onChange={handleCampChange}>
          <option value="pendiente">Pendiente</option>
          <option value="activa">Activa</option>
          <option value="finalizada">Finalizada</option>
        </select>
        <button type="submit">Crear campaña</button>
      </form>

      <h2>Hoja de personaje</h2>
      <CharacterSheet />
    </div>
  );
}

export default App;
