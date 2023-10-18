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
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { Empresa } from "../../interfaces/empresa";
import React, { useEffect, useState } from "react";
import { updateEmpresa } from "../../services/empresaService";

interface atualizar {
  onUpdate: (empresaAtualizada: Empresa) => void;
}

interface atualizarProps {
  isOpen: boolean;
  onClose: () => void;
  empresa: Empresa;
  onUpdate: (empresaAtualizada: EmpresaData) => void;
}

export default function BotaoEditar({
  empresa,
  isOpen,
  onClose,
  onUpdate,
}: atualizarProps) {
  const initialRef = React.useRef<HTMLInputElement>(null);

  const [updateEmpresaData, setUpdateEmpresaData] = useState<Empresa>({
    nomeEmpresa: empresa ? empresa.nomeEmpresa : "",
    cnpj: empresa ? empresa.cnpj : "",
    email: empresa ? empresa.email : "",
    descricaoEmpresa: empresa ? empresa.descricaoEmpresa : "",
    endereco: empresa ? empresa.endereco : "",
    parceiro: empresa ? empresa.parceiro : false,
  });

  useEffect(() => {
    if (empresa) setUpdateEmpresaData(empresa);
  }, [empresa]);

  const atualizarEmpresa = async () => {
    try {
      const nomeEmpresa = empresa.idEmpresa!.toString();
      const { empresa, ...empresa } = updateEmpresaData;
      console.log(empresa);
    } catch (error) {
      console.error(
        "Erro ao atualizar os dados da empresa ",
        empresa?.idEmpresa,
        error
      );
    }
  };

  return (
    <>
      <Button size="sm" bg="#219C90" color="#fff">
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
          </ModalBody>
          <ModalFooter>
            <Button onClick={atualizarEmpresa}>Salvar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
