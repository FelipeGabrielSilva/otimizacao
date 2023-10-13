import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Input,
  RadioGroup,
  Radio,
  FormLabel,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { Empresa } from "../../interfaces/empresa";
import React, { useEffect, useState } from "react";

interface atualizar{
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (empresaAtualizada: Empresa) => void;
}

export default function BotaoEditar({empresa, isOpen, onUpdate}: atualizar) {
  const {onOpen, onClose, } = useDisclosure();

  const initialRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <Button size="sm" bg="#219C90" color="#fff" onClick={onOpen}>
        <FaEdit size={18} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>EDITAR</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form autoComplete="off">
              <Flex display="flex" flexDir="column" gap="8px">
                <FormLabel>Nome da empresa:</FormLabel>
                <Input type="text" />

                <FormLabel>CNPJ da empresa:</FormLabel>
                <Input type="text" />

                <FormLabel>E-mail:</FormLabel>
                <Input type="email" />

                <FormLabel>Endereço:</FormLabel>
                <Input type="text" />

                <FormLabel>Descrição</FormLabel>
                <Input type="text" />

                <RadioGroup display="flex" gap="1em">
                  <FormLabel>Parceira:</FormLabel>
                  <Radio value="true">Sim</Radio>
                  <Radio value="false">Não</Radio>
                </RadioGroup>
              </Flex>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
