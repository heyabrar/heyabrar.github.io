import { Box, Text, Image } from "@chakra-ui/react";

export default function About ( ){
    return(
        <>
        <Box w={{base : '75%', md : '58%', lg : '40%'}} m='auto' textAlign='center' fontSize={{base : '12px', md :'14px', lg : '16px'}}>
            <Text color='#805AD5' fontSize={{base : '20px',md: '22px', lg : '40px'}} fontWeight={{base : '600', md : '700'}}>About Me</Text>
            <Text mt={{base : '7px', md : '10px'}} fontSize={{base : '15px', md : '18px', lg : '20px'}} lineHeight={{base : '22px', md :'25px', lg : '35px'}}> Ambitious and an aspiring Full-stack Web Developer with core 
                knowledge of MERN stack technology. Looking forward in implementing and tweak my capabilities as a developer.</Text>
        </Box>
        </>
    )
}