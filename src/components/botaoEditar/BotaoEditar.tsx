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
import { updateEmpresa } from "../../services/empresaService";

interface ConsultaProps {
  empresa: Empresa;
  onUpdate: (atualizadaEmpresa: Empresa) => void;
}

export default function BotaoEditar({
  empresa,
  onUpdate,
}: ConsultaProps) {

  const {onOpen, isOpen, onClose} = useDisclosure();
  const initialRef = React.useRef<HTMLInputElement>(null);

  const [updateEmpresaData, setUpdateEmpresaData] =
  useState<Empresa>({
    nomeEmpresa: empresa ? empresa.nomeEmpresa : "",
    cnpj: empresa ? empresa.cnpj : "",
    descricaoEmpresa: empresa ? empresa.descricaoEmpresa : "",
    endereco: empresa ? empresa.endereco : "",
    email: empresa ? empresa.email : "",
    parceiro: empresa ? empresa.parceiro : false,
  });

  useEffect(() => {
    if (empresa) setUpdateEmpresaData(empresa);
  }, [empresa]
  );

  const atualizar = async () => {
    try {
      if (empresa) {
        const {nomeEmpresa, ...empresa} = updateEmpresaData;
        console.log(setUpdateEmpresaData);

        await updateEmpresa(nomeEmpresa, empresa);

        onUpdate(updateEmpresaData);
        onClose();
      }
    } catch (error) {
      console.error("Erro ao atualizar os dados da empresa", empresa?.idEmpresa)
    }
  }
  return (
    <>
      <Button size="sm" bg="#219C90" color="#fff">
        <FaEdit size={18} onClick={onOpen} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>EDITAR</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {empresa && (
              <form autoComplete="off">
                <Flex display="flex" flexDir="column" gap="8px">
                  <FormLabel>Nome da empresa:</FormLabel>
                  <Input
                    type="text"
                    ref={initialRef}
                    defaultValue={empresa.nomeEmpresa}
                    onChange={(event) => {
                      setUpdateEmpresaData({
                        ...updateEmpresaData,
                        nomeEmpresa: event.target.value,
                      });
                    }}
                  />

                  <FormLabel>CNPJ da empresa:</FormLabel>
                  <Input
                    type="text"
                    defaultValue={empresa.cnpj}
                    onChange={(event) => {
                      setUpdateEmpresaData({
                        ...updateEmpresaData,
                        cnpj: event.target.value,
                      });
                    }}
                  />

                  <FormLabel>E-mail:</FormLabel>
                  <Input
                    type="email"
                    defaultValue={empresa.email}
                    onChange={(event) => {
                      setUpdateEmpresaData({
                        ...updateEmpresaData,
                        email: event.target.value,
                      });
                    }}
                  />

                  <FormLabel>Endereço:</FormLabel>
                  <Input
                    type="text"
                    defaultValue={empresa.endereco}
                    onChange={(event) => {
                      setUpdateEmpresaData({
                        ...updateEmpresaData,
                        endereco: event.target.value,
                      });
                    }}
                  />

                  <FormLabel>Descrição</FormLabel>
                  <Input
                    type="text"
                    defaultValue={empresa.descricaoEmpresa}
                    onChange={(event) => {
                      setUpdateEmpresaData({
                        ...updateEmpresaData,
                        descricaoEmpresa: event.target.value,
                      });
                    }}
                  />

                  <RadioGroup display="flex" gap="1em">
                    <FormLabel>Parceira:</FormLabel>
                    <Radio value="true">Sim</Radio>
                    <Radio value="false">Não</Radio>
                  </RadioGroup>
                </Flex>
              </form>
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => atualizar()}>Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
