import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  TableCaption,
} from "@chakra-ui/react";
import BotaoEditar from "../../components/botaoEditar/BotaoEditar";
import BotaoDeletar from "../../components/botaoDeletar/BotaoDeletar";
import { deleteEmpresa, getAllEmpresa } from "../../services/empresaService";
import { Empresa } from "../../interfaces/empresa";
import { useState, useEffect } from "react";

export default function ListaCadastro() {
  const [empresa, setEmpresa] = useState<Empresa[]>([]);
  useEffect(() => {
    async function buscarEmpresas() {
      try {
        await getAllEmpresa().then((empresa) => setEmpresa(empresa));
      } catch (error) {
        console.error("Erro ao obter as empresas", error);
      }
    }

    buscarEmpresas();
  }, []);

  const deletarEmpresa = async (idEmpresa: string) => {
    await deleteEmpresa(idEmpresa);
    window.location.reload();
  };

  return (
    <>
      <TableContainer
        h="85vh"
        borderWidth="1px"
        borderRadius="12px"
        p="1em"
        m="2em"
        boxShadow="1px 2px 9px #cfcfcf"
        boxSizing="border-box"
      >
        <Table h="92%" variant="simple" boxSizing="content-box" size="sm">
          <TableCaption>Lista de empresas cadastradas</TableCaption>
          <Thead justifyContent="center" alignContent="center">
            <Tr>
              <Th>ID</Th>
              <Th>NOME</Th>
              <Th>CNPJ</Th>
              <Th>E-MAIL</Th>
              <Th>DESCRIÇÃO</Th>
              <Th>ENDEREÇO</Th>
              <Th>PARCEIRO</Th>
              <Th>AÇÕES</Th>
            </Tr>
          </Thead>
          <Tbody>
            {empresa.map((item, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{item.nomeEmpresa}</Td>
                <Td>{item.cnpj}</Td>
                <Td>{item.email}</Td>
                <Td>{item.endereco}</Td>
                <Td>{item.descricaoEmpresa}</Td>
                <Td>{item.parceiro ? "Sim" : "Não"}</Td>
                <Td>
                  <Flex gap="8px">
                    <BotaoEditar />
                    <BotaoDeletar
                      aoClicar={() => deletarEmpresa(item.idEmpresa!)}
                    />
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
