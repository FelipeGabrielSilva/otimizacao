import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Tab,
  TabList,
  Tabs,
  Textarea,
} from "@chakra-ui/react";
import "./admCadastro.module.css";

export default function AdmCadastro() {
  return (
    <Flex
      display="flex"
      flexDir="column"
      p="1.5em"
      gap="2em"
    >
      <Box gap="1em" display="flex" flexDir="column">
        <h1>CADASTRO PARA QUALQUER COISA - Fomenta Vale</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, nemo?
          Consequatur voluptates quod iusto magni necessitatibus tempore dolore
          consectetur, nam dicta, illum consequuntur inventore quidem voluptas
          hic cumque itaque illo!
        </p>
      </Box>

      <Box display="flex" flexDir="row" justifyContent="center" gap="2em">
        <Box w="27%" boxShadow="1px 2px 9px #cfcfcf">
          <Tabs isFitted variant="enclosed">
            <TabList gap="4px" color="white">
              <Tab bg="#F37021"></Tab>
              <Tab bg="#008177">X</Tab>
              <Tab bg="#008177">X</Tab>
            </TabList>
          </Tabs>
          <form>
            <FormControl>
              <FormLabel>Nome para o cadastro:</FormLabel>
              <Input borderRadius="15px"></Input>
            </FormControl>

            <FormControl>
              <FormLabel>Tipo de cadastro:</FormLabel>
              <Input borderRadius="15px" type="select"></Input>
            </FormControl>

            <FormControl>
              <FormLabel>Descrição:</FormLabel>
              <Textarea borderRadius="15px" h="130px"></Textarea>
            </FormControl>

            <Box mt="10em" justifyContent="space-between" display="flex">
              <Button w="5em" h="45px" bg="#008177" dropShadow={"30px 10px 4px #000"}>
                Enviar
              </Button>
              <Button w="5em" h="45px" bg="#F37021">
                Cancelar
              </Button>
            </Box>
          </form>
        </Box>

        <Box w="27%" boxShadow="1px 2px 9px #cfcfcf">
          <Tabs isFitted variant="enclosed">
            <TabList gap="4px" color="white">
              <Tab bg="#008177">✔</Tab>
              <Tab bg="#F37021"></Tab>
              <Tab bg="#008177">X</Tab>
            </TabList>
          </Tabs>
          <form>
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


            <Box mt="10em" justifyContent="space-between" display="flex">
              <Button w="5em" h="45px" bg="#008177">
                Enviar
              </Button>
              <Button w="5em" h="45px" bg="#F37021">
                Cancelar
              </Button>
            </Box>
          </form>
        </Box>

        <Box w="27%" boxShadow="1px 2px 9px #cfcfcf">
          <Tabs isFitted variant="enclosed">
            <TabList gap="4px" color="white">
              <Tab bg="#008177">✔</Tab>
              <Tab bg="#008177">✔</Tab>
              <Tab bg="#F37021"></Tab>
            </TabList>
          </Tabs>
          <form>
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

            <Box mt="10em" justifyContent="space-between" display="flex">
              <Button w="5em" h="45px" bg="#008177">
                Enviar
              </Button>
              <Button w="5em" h="45px" bg="#F37021">
                Cancelar
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
