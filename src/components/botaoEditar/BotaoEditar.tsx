import { Button } from "@chakra-ui/react";
import { FaEdit} from "react-icons/fa"

export default function BotaoEditar() {
     return(
          <Button bg="#219C90" display="flex" m="auto" justifyContent="center" type="submit" color="#fff" w="48px">
               <FaEdit size={24} />
               </Button>
     )
}