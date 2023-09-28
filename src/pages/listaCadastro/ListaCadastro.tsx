import {
     Table,
     Thead,
     Tbody,
     Tr,
     Th,
     Td,
     TableContainer,
} from "@chakra-ui/react"
import BotaoEditar from "../../components/botaoEditar/BotaoEditar"
import BotaoDeletar from "../../components/botaoDeletar/BotaoDeletar"

export default function ListaCadastro() {
     return(
          <TableContainer h="85vh" borderWidth="1px" borderRadius="12px" p="1em" m="2em" boxShadow="1px 2px 9px #F4AAB9">
               <Table variant="simple" >
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
                         <Tr>
                              <Td>1</Td>
                              <Td>Fomenta Vale</Td>
                              <Td>4785-9856-5213</Td>
                              <Td>contato@fomentavale.com.br</Td>
                              <Td>Tecnologia</Td>
                              <Td>Avenida Nove de Julho - nº106</Td>
                              <Td>Sim</Td>
                              <Td display="flex" gap="8px">
                                   <BotaoEditar/>
                                   <BotaoDeletar/>
                              </Td>
                         </Tr>
                    </Tbody>
               </Table>
          </TableContainer>
     )
}