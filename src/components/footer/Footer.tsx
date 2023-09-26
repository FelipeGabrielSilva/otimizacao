import {Flex, Grid} from "@chakra-ui/react";

export default function Footer() {
     return(
          <>
          <Flex w="100%" h="45px" bg="#219C90"  justifyContent="center" alignItems="center">
               <Grid color="#fff">
                    <h1>desenvolvido by Felipe Gabriel - Estagiário da Fomenta Vale</h1>
               </Grid>
          </Flex>
          </>
     )
}