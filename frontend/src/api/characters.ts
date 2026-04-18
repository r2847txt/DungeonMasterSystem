import api from "./client";

export const getCharacters = async () => {
  const res = await api.get("/characters");
  return res.data;
};

export const createCharacter = async (character: any) => {
  const res = await api.post("/characters", character);
  return res.data;
};
