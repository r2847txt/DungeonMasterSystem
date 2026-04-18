import api from "./client";

export const getCampaigns = async () => {
  const res = await api.get("/campaigns");
  return res.data;
};

export const createCampaign = async (campaign: any) => {
  const res = await api.post("/campaigns", campaign);
  return res.data;
};
