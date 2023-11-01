import { Box, Tabs, TabList, Tab, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";


export default function FormularioBase(props) {
     return(
          <Box w="27%" boxShadow="1px 2px 9px #cfcfcf">
          <Tabs isFitted variant="enclosed">
            <TabList gap="4px" color="white">
              <Tab bg="#008177"></Tab>
              <Tab bg="#F37021"></Tab>
              <Tab bg="#008177"></Tab>
            </TabList>
          </Tabs>
          <form>
            {props.children}
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
     )
}