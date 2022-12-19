import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import CopyRight from "./CopyRight";

export default function Contact ( ){
    return(
        <>
        <Text textAlign='center' color='#805AD5' fontSize={{base : '20px',md: '22px', lg : '40px'}} fontWeight={{base : '600', md : '700'}}>Contact</Text>
        <Box pb={{base : '20px', md : '30px'}}> 
            <Flex w={{base :'30%', md : '20%', lg : '10%'}} m='auto' justifyContent='space-around' fontSize={{base : '22px', md : '26px', lg :'30px'}} mt='20px'>
            <Box>
                  <Tooltip label='LinkedIn' bg='#EDF2F7' color='black'>
                  <a href="https://www.linkedin.com/in/heyabrar" target='_blank'><Text><BsLinkedin/></Text></a>
                  </Tooltip>
                </Box>
                
                <Box>
                   <Tooltip label='GitHub' bg='#EDF2F7' color='black'> 
                   <a href="https://github.com/heyabrar" target='_blank'><Text><BsGithub/></Text></a>
                   </Tooltip>
                </Box>
            </Flex>
        </Box>

        <Box  width={{base : '55%', md : '35%', lg : '25%'}} m='auto' textAlign='center' paddingBottom={{base :'10px', lg : '30px'}}>
            <CopyRight/>
            <Text fontSize={{base : '8px', md  :'10px ', lg :'12px'}}>Credits : Proudly Built By <a href="https://www.linkedin.com/in/heyabrar" target='_blank'>@Abrar Khan</a></Text>
        </Box>
        </>
    )
    
}