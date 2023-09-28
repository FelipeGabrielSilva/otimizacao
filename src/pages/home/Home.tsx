import {Flex, Grid, GridItem} from "@chakra-ui/react"

export default function Home() {
     return(
          <>
          <Flex h="85vh" w="100%" justifyContent="center" p="3em">
               <Grid display="flex" flexDir="column" width="60%" fontSize="1em">
                    <GridItem justifyContent="center" display="flex">
                         <h1>Bem-vindo ao crud de cadastro de empresa</h1>
                    </GridItem>
                    <GridItem textAlign="justify" display="flex" flexDir="column" gap="1em" p="2em 0 0 0">
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident deleniti officia aliquam aut rem? Laboriosam ducimus temporibus, similique, veritatis voluptas voluptatibus accusamus quasi error nulla esse culpa natus mollitia adipisci.</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptates, accusantium tenetur totam minus corporis placeat non consequatur magnam aperiam similique ducimus in saepe ipsum. Facilis consequatur modi architecto quam!</p>
                    </GridItem>
               </Grid>
          </Flex>
          </>
     )
}