import {api} from "./apiService";
import { Cadastro } from "../interfaces/cadastro";

export const createCadastro = async (cadastroData: Cadastro) => {
     const response = await api.post("/Cadastro", cadastroData);
     return response.data;
};

export const getAllCadastro = async () => {
     const response = await api.get("/cadastro");
     return response.data;
};

export const getCadastro = async (cadastroId: string) => {
     const response = await api.get(`/cadastro/${cadastroId}`);
     return response.data;
};

export const updateCadastro = async (cadastroId: string, updatedData: any) => {
     const response = await api.patch(`/cadastro/${cadastroId}`, updatedData);
     return response.data;
};

export const deleteCadastro = async (cadastroId: string) => {
     const response = await api.delete(`/cadastro${cadastroId}`);
     return response.data;
}