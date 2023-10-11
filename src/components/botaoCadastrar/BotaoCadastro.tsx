import { Button } from "@chakra-ui/react";
import { Cadastro } from "../../interfaces/cadastro";
import { useState } from "react";
import { createCadastro } from "../../services/cadastroService";

export default function BotaoCadastro() {
     const [novoCadastro, setNovoCadastro] = useState<Cadastro>({
          nomeEmpresa: "",
          cnpj: "",
          email: "",
          descricao: "",
          endereco: "",
     });

     const criarCadastro = (event: any) => {
          event.preventDefault()

          createCadastro(novoCadastro)
          .then(() => {
               console.log(novoCadastro, " cadastrado com sucesso")
          })
          .catch((error) => {
               console.log(error, " cadastro não realizado");
          })
     }
     return(
          <Button bg="#219C90" m="auto" type="submit" w="20%" color="#fff" 
          onClick={criarCadastro}>Cadastrar</Button>
     )
}