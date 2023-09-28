import { Button } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa"

export default function BotaoEditar() {
     return(
          <Button bg="red" display="flex" m="auto" justifyContent="center" type="submit" color="#fff" w="48px">
               <FaTrashAlt size={24} />
               </Button>
     )
}