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
} from "@chakra-ui/react"
import BotaoEditar from "../../components/botaoEditar/BotaoEditar"
import BotaoDeletar from "../../components/botaoDeletar/BotaoDeletar"
import { empresas } from "./Empresas"

export default function ListaCadastro() {
     return(
          <>
          <TableContainer h="auto" borderWidth="1px" borderRadius="12px" p="1em" m="2em" boxShadow="1px 2px 9px #cfcfcf" boxSizing="border-box">
               <Table variant="simple" boxSizing="content-box" size="sm">
                    <TableCaption>Lista de empresas cadastradas</TableCaption>
                    <Thead justifyContent="center" alignContent="center">
                         <Tr>
                              <Th >ID</Th>
                              <Th>NOME</Th>
                              <Th>CNPJ</Th>
                              <Th>E-MAIL</Th>
                              <Th>DESCRIÇÃO</Th>
                              <Th>ENDEREÇO</Th>
                              <Th>PARCERIA</Th>
                              <Th>AÇÕES</Th>
                         </Tr>
                    </Thead>
                    <Tbody>
                         {empresas.map((item) => (
                              <Tr key={item.id}>
                                   <Td>{item.id}</Td>
                                   <Td>{item.nome}</Td>
                                   <Td>{item.cnpj}</Td>
                                   <Td>{item.email}</Td>
                                   <Td>{item.endereco}</Td>
                                   <Td>{item.descricao}</Td>
                                   <Td>{item.parceira}</Td>
                                   <Td>
                                        <Flex gap="8px">
                                             <BotaoEditar/>
                                             <BotaoDeletar/>
                                        </Flex>
                                   </Td>
                              </Tr>
                         ))}
                    </Tbody>
               </Table>
          </TableContainer>
          </>
     )
}
