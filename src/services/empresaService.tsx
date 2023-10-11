import { api } from "./apiService";
import { Empresa } from "../interfaces/empresa";

export const createEmpresa = async (empresaData: Empresa) => {
  const response = await api.post("/empresa", empresaData);
  return response.data;
};

export const getAllEmpresa = async () => {
  const response = await api.get("/empresa");
  return response.data;
};

export const getEmpresa = async (empresaId: string) => {
  const response = await api.get(`/empresa/${empresaId}`);
  return response.data;
};

export const updateEmpresa = async (empresaId: string, updatedData: any) => {
  const response = await api.patch(`/empresa/${empresaId}`, updatedData);
  return response.data;
};

export const deleteEmpresa = async (empresaId: string) => {
  const response = await api.delete(`/empresa/${empresaId}`);
  return response.data;
};
