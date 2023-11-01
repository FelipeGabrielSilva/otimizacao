import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import "./AdmCadastro.module.css";
import FormularioBase from "./formulario/FormularioBase";

export default function AdmCadastro() {
  return (
    <Flex display="flex" flexDir="column" p="1.5em" gap="2em">
      <Box gap="1em" display="flex" flexDir="column">
        <h1>CADASTRO PARA QUALQUER COISA - Fomenta Vale</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, nemo?
          Consequatur voluptates quod iusto magni necessitatibus tempore dolore
          consectetur, nam dicta, illum consequuntur inventore quidem voluptas
          hic cumque itaque illo!
        </p>
      </Box>

      <Box display="flex" flexDir="row" gap="2em" justifyContent="center">
        <FormularioBase>
          <FormControl>
            <FormControl>
              <FormLabel>Palestrante:</FormLabel>
              <Input borderRadius="15px"></Input>
            </FormControl>

            <FormControl>
              <FormLabel>Hora de início:</FormLabel>
              <Input borderRadius="15px" type="time"></Input>
            </FormControl>

            <FormControl>
              <FormLabel>Hora de finalização:</FormLabel>
              <Input borderRadius="15px" type="time"></Input>
            </FormControl>

            <FormControl>
              <FormLabel>Data:</FormLabel>
              <Input borderRadius="15px" type="date"></Input>
            </FormControl>
          </FormControl>
        </FormularioBase>

        <FormularioBase>
          <FormControl>
            <FormLabel>Palestrante:</FormLabel>
            <Input borderRadius="15px"></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Hora de início:</FormLabel>
            <Input borderRadius="15px" type="time"></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Hora de finalização:</FormLabel>
            <Input borderRadius="15px" type="time"></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Data:</FormLabel>
            <Input borderRadius="15px" type="date"></Input>
          </FormControl>
        </FormularioBase>

        <FormularioBase>
          <FormControl>
            <FormLabel>Arrecadação:</FormLabel>
            <Input borderRadius="15px"></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Participantes:</FormLabel>
            <Input borderRadius="15px" type="number"></Input>
          </FormControl>

          <FormControl>
            <FormLabel>Observação:</FormLabel>
            <Textarea borderRadius="15px" h="130px"></Textarea>
          </FormControl>
        </FormularioBase>
      </Box>
    </Flex>
  );
}
