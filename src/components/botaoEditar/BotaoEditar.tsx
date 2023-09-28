import {
     Button,
  } from "@chakra-ui/react";
import { FaEdit} from "react-icons/fa"

export default function BotaoEditar() {

     return(
          <>
          <Button size="sm" bg="#219C90" color="#fff">
                    <FaEdit size={18} />
          </Button>
          </>
     )
}