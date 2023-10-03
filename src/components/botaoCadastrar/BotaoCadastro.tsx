import { Button, useToast } from "@chakra-ui/react";

export default function BotaoCadastro() {
     const toast = useToast();
     const exibirToast = () => {
          toast({
               title: 'Cadastro concluído',
               description: "A empresa foi cadastrada",
               status: 'success',
               duration: 2000,
               isClosable: true,
               position: 'top',
          })
     }
     return(
          <Button bg="#219C90" m="auto" type="submit" w="20%" color="#fff" 
          onClick={exibirToast}>Cadastrar</Button>
     )
}