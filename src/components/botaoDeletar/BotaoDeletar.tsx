import { AlertDialog, 
     AlertDialogBody, 
     AlertDialogContent, 
     AlertDialogFooter, 
     AlertDialogHeader, 
     AlertDialogOverlay, 
     Button, 
     useDisclosure } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa"
import React from "react"

export default function BotaoEditar() {
     const { isOpen, onOpen, onClose } = useDisclosure();
     const cancelRef = React.useRef(null);

     return(
          <>
          <Button size="sm" bg="red" color="#fff">
               <FaTrashAlt size={18} onClick={onOpen} />
          </Button>

          <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
               <AlertDialogOverlay>
                    <AlertDialogContent>
                         <AlertDialogHeader textAlign="center">Deletar item da lista?</AlertDialogHeader>
                         <AlertDialogBody textAlign="center">Após apagar, não será possível reverter essa ação.</AlertDialogBody>
                         <AlertDialogFooter display="flex" justifyContent="space-between">
                              <Button ref={cancelRef} onClick={onClose}>
                                   Cancelar
                              </Button>
                              <Button bg="red" color="#fff" onClick={onClose}>
                                   Deletar
                              </Button>
                         </AlertDialogFooter>
                    </AlertDialogContent>
               </AlertDialogOverlay>
          </AlertDialog>
          </>
     )
}