import {
     Modal,
     ModalOverlay,
     ModalContent,
     ModalHeader,
     ModalFooter,
     ModalBody,
     ModalCloseButton,
     Button,
     useDisclosure,
  } from "@chakra-ui/react";
import { FaEdit} from "react-icons/fa"
import Editar from "../editar/Editar";

export default function BotaoEditar() {
     const {isOpen, onOpen, onClose} = useDisclosure();

     return(
          <>
          <Button size="sm" bg="#219C90" color="#fff" onClick={onOpen}>
                    <FaEdit size={18} />
          </Button>

          <Modal isOpen={isOpen} onClose={onClose} size="sm" >
               <ModalOverlay />
                    <ModalContent>
                         <ModalHeader>EDITAR</ModalHeader>
                         <ModalCloseButton />
                         <ModalBody>
                              <Editar/>
                         </ModalBody>
                         <ModalFooter>
                              <Button onClick={onClose}>Salvar</Button>
                         </ModalFooter>
                    </ModalContent>
          </Modal>
          </>
     )
}