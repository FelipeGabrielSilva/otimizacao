import {
     Table,
     Thead,
     Tbody,
     Tr,
     Th,
     Td,
     TableContainer,
} from "@chakra-ui/react"

export default function ListaCadastro() {
     return(
          <TableContainer h="85vh" borderWidth="1px" borderRadius="12px" p="1em" m="2em">
               <Table variant="simple" >
                    <Thead justifyContent="center" alignContent="center">
                         <Tr>
                              <Th>NOME</Th>
                              <Th>CNPJ</Th>
                              <Th>E-MAIL</Th>
                              <Th>DESCRIÇÃO</Th>
                              <Th>ENDEREÇO</Th>
                              <Th>PARCERIA</Th>
                         </Tr>
                    </Thead>
                    <Tbody>
                         <Tr>
                              <Td>Fomenta Vale</Td>
                              <Td>4785-9856-5213</Td>
                              <Td>contato@fomentavale.com.br</Td>
                              <Td>Tecnologia</Td>
                              <Td>Avenida Nove de Julho - nº106</Td>
                              <Td>Sim</Td>
                         </Tr>
                         <Tr>
                              <Td>Fomenta Vale</Td>
                              <Td>4785-9856-5213</Td>
                              <Td>contato@fomentavale.com.br</Td>
                              <Td>Tecnologia</Td>
                              <Td>Avenida Nove de Julho - nº106</Td>
                              <Td>Sim</Td>
                         </Tr>
                         <Tr>
                              <Td>Fomenta Vale</Td>
                              <Td>4785-9856-5213</Td>
                              <Td>contato@fomentavale.com.br</Td>
                              <Td>Tecnologia</Td>
                              <Td>Avenida Nove de Julho - nº106</Td>
                              <Td>Sim</Td>
                         </Tr>
                         <Tr>
                              <Td>Fomenta Vale</Td>
                              <Td>4785-9856-5213</Td>
                              <Td>contato@fomentavale.com.br</Td>
                              <Td>Tecnologia</Td>
                              <Td>Avenida Nove de Julho - nº106</Td>
                              <Td>Sim</Td>
                         </Tr>
                    </Tbody>
               </Table>
          </TableContainer>
     )
}