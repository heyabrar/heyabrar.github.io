import { Box, Flex, Text } from "@chakra-ui/react";
import {BsLinkedin,BsTwitter,BsGithub} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'

export default function Contact ( ){
    return(
        <>
        <Text textAlign='center' color='#805AD5' fontSize={{base : '20px',md: '22px', lg : '40px'}} fontWeight={{base : '600', md : '700'}}>Contact</Text>
        <Box pb='50px'>
            <Text textAlign='center'>Find Me Around The Web</Text>
            <Flex w={{base :'60%', md : '45%', lg : '25%'}} m='auto' justifyContent='space-around' fontSize={{base : '22px', md : '26px', lg :'30px'}} mt='20px'>
                <Box>
                 <a href="https://www.linkedin.com/in/abrar-khan-b67333230/" target='_blank'> <Text><BsLinkedin/></Text></a>
                </Box>

                <Box>
                   <a href="https://twitter.com/_iam_a_k" target='_blank'> <Text><BsTwitter/></Text></a>
                </Box>

                <Box>
                   <a href="https://github.com/heyabrar" target='_blank'><Text><BsGithub/></Text></a>
                </Box>

                <Box>
                   <a href="tel:+918217361455" ><Text><AiOutlinePhone/></Text></a>
                </Box>

                <Box>
                   <a href="mailto:heyabrarkhan@gmail.com"><Text><GrMail/></Text></a>
                </Box>
            </Flex>
        </Box>
        </>
    )
    
}