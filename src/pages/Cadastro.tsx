import {Flex, FormControl, FormLabel, Input, RadioGroup, Radio, Button} from "@chakra-ui/react"
import {useForm, SubmitHandler} from "react-hook-form"
import * as yup from "yup"

export default function Cadastro() {
     const {
          register, handleSubmit, formState: {errors}} = useForm()


     const onSubmit: SubmitHandler = (data: object) => console.log(data)

     return(
          <Flex margin="2em auto" display="flex" flexDir="column" p="1.5em" gap="1.5em" w="50%" border="1px solid gray" borderRadius="1em" onSubmit={handleSubmit(onSubmit)}>
               <FormControl>
                    <FormLabel>Nome da empresa:</FormLabel>
                    <Input type="text" placeholder="Digite o nome da empresa" defaultValue=""  {...register("nomeEmpresa", {required: true})} />
               </FormControl>
               
               <FormControl>
                    <FormLabel>CNPJ da empresa:</FormLabel>
                    <Input type="text" placeholder="Digite o cnpj da empresa" defaultValue="" 
                    {...register("cnpj", {required: true})} />
               </FormControl>
               
               <FormControl>
                    <FormLabel>E-mail da empresa:</FormLabel>
                    <Input type="email" placeholder="Digite o e-mail da empresa" defaultValue="" {...register("email", {required: true})} />
               </FormControl>
               
               <FormControl>
                    <FormLabel>Descrição:</FormLabel>
                    <Input type="text" placeholder="Categoria" {...register("descricao", {required: true})} defaultValue="" />
               </FormControl>

               <FormControl>
                    <FormLabel>Endereço:</FormLabel>
                    <Input type="text" placeholder="Informe o endereço da empresa" defaultValue="" {...register("endereco", {required: true})} />
               </FormControl>

               <RadioGroup display="flex" gap="1em">
                    <FormLabel>Parceira:</FormLabel>
                    <Radio value="true" >Sim</Radio>
                    <Radio value="false" >Não</Radio>
               </RadioGroup>

               <Button display="flex" m="auto" justifyContent="center" type="submit" w="20%">Enviar</Button>
          </Flex>
     )
}