import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./Cadastro.module.css";
import { createEmpresa } from "../../services/empresaService";
import { useState } from "react";
import { Empresa } from "../../interfaces/empresa";

const schema = yup.object().shape({
  nomeEmpresa: yup.string().required(),
  cnpj: yup.string().required(),
  email: yup.string().email().required(),
  descricaoEmpresa: yup.string().required(),
  endereco: yup.string().required(),
  parceiro: yup.boolean().required(),
});

export default function Cadastro() {
  const [novoEmpresa, setNovoEmpresa] = useState<Empresa>({
     nomeEmpresa: "",
     cnpj: "",
     descricaoEmpresa: "",
     endereco: "",
     email: "",
     parceiro: false,
  });

  const { register, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const criarEmpresa = (novoEmpresa: Empresa) => {
    createEmpresa(novoEmpresa)
      .then(() => {
        console.log(novoEmpresa, " cadastrado com sucesso");
      })
      .catch((error) => {
        console.log(error, "empresa não realizado");
      });
  };

  const onSubmit = (data: object) => (
    console.log(data), criarEmpresa(novoEmpresa), reset()
  );

  return (
    <Flex
      margin="2em auto"
      display="flex"
      flexDir="column"
      p="1.5em"
      w="45%"
      border="1px solid #cfcfcf"
      borderRadius="1em"
      boxShadow="1px 2px 9px #cfcfcf"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.formulario}
        autoComplete="off"
      >
        <FormControl>
          <FormLabel>Nome da empresa:</FormLabel>
          <Input
            id="nomeEmpresa"
            type="text"
            placeholder="Digite o nome da empresa"
            {...register("nomeEmpresa", { required: true })}
            onChange={(event) => {
               setNovoEmpresa({
                    ...novoEmpresa,
                    nomeEmpresa: event.target.value,
               });
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel>CNPJ da empresa:</FormLabel>
          <Input
            id="cnpj"
            type="text"
            placeholder="Digite o cnpj da empresa"
            {...register("cnpj", { required: true })}
            onChange={(event) => {
               setNovoEmpresa({
                    ...novoEmpresa,
                    cnpj: event.target.value,
               })
            }}
          />
        </FormControl>

        <FormControl>
          <FormLabel>E-mail da empresa:</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Digite o e-mail da empresa"
            {...register("email", { required: true })}
            onChange={(event) => {
               setNovoEmpresa({
                    ...novoEmpresa,
                    email: event.target.value,
               })
            }}
          />
        </FormControl>


        <FormControl>
          <FormLabel>Endereço:</FormLabel>
          <Input
            id="endereco"
            type="text"
            placeholder="Informe o endereço da empresa"
            {...register("endereco", { required: true })}
            onChange={(event) => {
               setNovoEmpresa({
                 ...novoEmpresa,
                 endereco: event.target.value,
                })
            }}
          />
        </FormControl>
        
          <FormControl>
            <FormLabel>Descrição:</FormLabel>
            <Input
              id="descricao"
              type="text"
              placeholder="Categoria"
              {...register("descricaoEmpresa", { required: true })}
              onChange={(event) => {
                 setNovoEmpresa({
                      ...novoEmpresa,
                      descricaoEmpresa: event.target.value,
                 })
              }}
            />
          </FormControl>

        <RadioGroup display="flex" gap="1em" onChange={(event) => {
          setNovoEmpresa({
            ...novoEmpresa,
               parceiro: Boolean(event=='true'),
          })
        }}>
          <FormLabel>Parceira:</FormLabel>
          <Radio {...register("parceiro", { required: true })} value="true">
            Sim
          </Radio>
          <Radio {...register("parceiro", { required: true })} value="false">
            Não
          </Radio>
        </RadioGroup>

        <Button bg="#219C90" m="auto" type="submit" w="20%" color="#fff">Cadastrar</Button>
      </form>
    </Flex>
  );
}
