import { Flex, FormLabel, Input, Radio, RadioGroup } from "@chakra-ui/react";


export default function Editar() {
     return(
          <>
          <form autoComplete="off">
               <Flex display="flex" flexDir="column" gap="8px">
                    <FormLabel>Nome da empresa:</FormLabel>
                    <Input type="text" />

                    <FormLabel>CNPJ da empresa:</FormLabel>
                    <Input type="text" />

                    <FormLabel>E-mail:</FormLabel>
                    <Input type="email" />

                    <FormLabel>Endereço:</FormLabel>
                    <Input type="text" />
                    
                    <FormLabel>Descrição</FormLabel>
                    <Input type="text" />

                    <RadioGroup display="flex" gap="1em">
                              <FormLabel>Parceira:</FormLabel>
                         <Radio value="true" >Sim</Radio>
                         <Radio value="false" >Não</Radio>
                    </RadioGroup>
               </Flex>
          </form>
          </>
     )
}