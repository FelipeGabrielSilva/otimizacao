import {Flex, FormControl, FormLabel, Input, RadioGroup, Radio, Button} from "@chakra-ui/react"
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from "react-hook-form"
import * as yup from "yup"
import styles from "./Cadastro.module.css"

const schema =  yup.object().shape({
     nomeEmpresa: yup.string().required("Campo obrigatório"),
     cnpj: yup.string().required("Campo obrigatório"),
     email: yup.string().email().required("Campo obrigatório"),
     descricao: yup.string().required("Campo obrigatório"),
     endereco: yup.string().required("Campo obrigatório"),
     parceria: yup.boolean().required("Campo obrigatório"),
});

export default function Cadastro() {

     const { register, handleSubmit } = useForm({
          mode: 'onSubmit',
          resolver: yupResolver(schema)
     });

     const onSubmit = (data: object) => console.log(data);

     return(
          <Flex margin="2em auto" display="flex" flexDir="column" p="1.5em"  w="50%" border="1px solid #cfcfcf" borderRadius="1em" >
               <form onSubmit={handleSubmit(onSubmit)} className={styles.formulario}>
                    <FormControl>
                         <FormLabel>Nome da empresa:</FormLabel>
                         <Input type="text" placeholder="Digite o nome da empresa" defaultValue="" {...register("nomeEmpresa", {required:true})} />
                    </FormControl>
                    
                    <FormControl>
                         <FormLabel>CNPJ da empresa:</FormLabel>
                         <Input type="text" placeholder="Digite o cnpj da empresa" defaultValue="" {...register("cnpj", {required:true})} />
                    </FormControl>
                    
                    <FormControl>
                         <FormLabel>E-mail da empresa:</FormLabel>
                         <Input type="email" placeholder="Digite o e-mail da empresa" defaultValue="" {...register("email", {required:true})} />
                    </FormControl>
                    
                    <FormControl>
                         <FormLabel>Descrição:</FormLabel>
                         <Input type="text" placeholder="Categoria"  defaultValue="" {...register("descricao", {required:true})} />
                    </FormControl>

                    <FormControl>
                         <FormLabel>Endereço:</FormLabel>
                         <Input type="text" placeholder="Informe o endereço da empresa" defaultValue=""  {...register("endereco", {required:true})} />
                    </FormControl>

                    <RadioGroup display="flex" gap="1em">
                         <FormLabel>Parceira:</FormLabel>
                         <Radio {...register("parceria", {required:true})} value="true" >Sim</Radio>
                         <Radio {...register("parceria", {required:true})} value="false" >Não</Radio>
                    </RadioGroup>

                    <Button display="flex" m="auto" justifyContent="center" type="submit" w="20%">Enviar</Button>
               </form>
          </Flex>
     )
}