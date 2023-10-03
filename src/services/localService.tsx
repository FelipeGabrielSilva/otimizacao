import {api} from "./apiService";
import { Cadastro } from "../interfaces/cadastro";

export const createCadastro = async (cadastro: Cadastro) => {
     const response = await api.post("/Cadastro", cadastro);
     return response.data;
};

export const getAllCadastro = async () => {
     const response = await api.get("/Cadastro");
     return response.data;
};

export const getCadastro = async (cadastroId: string) => {
     const response = await api.get(`/Cadastro/${cadastroId}`);
     return response.data;
};

export const updateCadastro = async (cadastroId: string, updatedData: any) => {
     const response = await api.patch(`/local/${cadastroId}`, updatedData);
     return response.data;
};

export const deleteCadastro = async (cadastroId: string) => {
     const response = await api.delete(`/cadastro${cadastroId}`);
     return response.data;
}