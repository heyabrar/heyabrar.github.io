import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function  GitStats  ( ) {
    return (
      <>
      <Text textAlign='center' fontSize={{base : '12px',md: '18px', lg : '20px'}} fontWeight={{base : '600', md : '600'}} mt={{base : '50px', md : '80px', lg :'55px'}} letterSpacing={{base : '3px'}}>GITHUB STATS</Text>
      <Flex border={'1px solid red'} width={{base : '75%', md : '75%', lg  :'70%'}} m='auto' direction={{base : 'column', md : 'row'}} justifyContent='center' alignItems='center' mt={{base : '10px', md : '30px', lg : '50px'}} gap={{base : '15px', md : '35px', lg : '70px'}}>
        <Box>
            <a href="https://github.com/heyabrar">
                    <Image width={{base : '250px', md : '450px', lg : '500px'}} src="https://github-readme-streak-stats.herokuapp.com/?user=heyabrar"/>
                </a>
        </Box>

        <Box>
        <a href="https://github.com/heyabrar">
                <Image width={{base : '300px', md : '470px', lg : '500px'}} src="https://github-readme-stats.vercel.app/api?username=heyabrar&count_private=true&show_icons=true"/>
            </a>
        </Box>
      </Flex>

     <Flex border={'2px solid red'}  w={{base : '70%', md : '80%'}}  m='auto' mt={{base : '13px', md :'25px'}} justifyContent='center' alignItems='center'> 
        <Box>
            <a href="https://github.com/heyabrar">
                <Image width={{base : '250px', md : '230px', lg : '350px'}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=heyabrar"/>
            </a>
        </Box>
     </Flex>
      </>
    );
  };