import { Box, Flex, Text } from "@chakra-ui/react";
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import CopyRight from "./CopyRight";

export default function Contact ( ){
    return(
        <>
        <Text textAlign='center' color='#805AD5' fontSize={{base : '20px',md: '22px', lg : '40px'}} fontWeight={{base : '600', md : '700'}}>Contact</Text>
        <Box pb={{base : '20px', md : '30px'}}>
            <Text textAlign='center' fontSize={{base : '15px', md : '16px'}} mt={{base : '10px'}}>Find Me Around The Web</Text>
            
            <Box width={{base : '60%', md : '33%' , lg :'17%'}} m='auto' mt={{base : '20px'}}>
                <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="heyabrar" data-version="v1" ><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/heyabrar?trk=profile-badge"></a></div>
            </Box>

            <Flex w={{base :'50%', md : '35%', lg : '15%'}} m='auto' justifyContent='space-around' fontSize={{base : '22px', md : '26px', lg :'30px'}} mt='20px'>
                <Box>
                   <a href="https://github.com/heyabrar" target='_blank'><Text><BsGithub/></Text></a>
                </Box>

                <Box>
                   <a href="tel:+918217361455" ><Text><AiOutlinePhone/></Text></a>
                </Box>

                <Box>
                   <a href="mailto:heyabrarkhan@email.com"><Text><GrMail/></Text></a>
                </Box>
            </Flex>
        </Box>

        <Box  width={{base : '50%', md : '35%', lg : '25%'}} m='auto' textAlign='center' paddingBottom={{base :'30px', lg : '50px'}}>
            <CopyRight/>
        </Box>
        </>
    )
    
}