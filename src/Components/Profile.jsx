import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export default function Profile ( ){
    return(
        <>
        <Box height={{base :'50px', md : '80px'}}></Box>
        <Flex w={{base : '100%', md : '80%'}} m='auto' alignItems='center' justifyContent={{base : 'center', md : 'space-around'}} flexDirection={{base : 'column-reverse', lg : 'row'}} rowGap={{base : '10px', md:'10px'}} mt={{base : '5px', md : '10px', lg : '40px'}}>
            <Box fontSize={{base : '18px', md : '35px', lg : '55px'}} width={{base : '90%', md : '100%', lg : '45%'}} m={{base : 'auto', lg:'0'}} fontWeight='600' textAlign={{base :'center', lg:'left'}}  lineHeight={{base : '28px', md:'50px', lg :'80px'}}>
                <Flex   justifyContent='center'   gap='5px' direction={{base : 'row', lg :'column'}}>

                <Flex>
                    <Text color='#RGBA(0, 0, 0, 0.64)'><b>Hello World </b></Text>
                    <Image w={{base : '40px', md : '60px', lg : '80px'}} src="https://cliply.co/wp-content/uploads/2021/02/392102850_EARTH_EMOJI_400px.gif"/>
                </Flex>

                <Text color='#RGBA(0, 0, 0, 0.64)'> <b>Myself</b> <b style={{color:'#805AD5'}}>Abrar Khan</b></Text>
                </Flex>
                <Text color='#RGBA(0, 0, 0, 0.64)   '><b>MERN Developer</b></Text>
               <a href="https://drive.google.com/file/d/1s6XzcoGAECjaWVGfMDdHro2ghFgweE-u/view?usp=sharing" target='_blank'><Button size={{base : 'sm', md : 'md' ,lg :'lg'}}mt={{base : '10px', md :'0'}} colorScheme='purple'>Resume</Button></a>
            </Box>

            <Box>
                <Image src='https://avatars.githubusercontent.com/u/103938174?v=4' shadow='lg' mt={{base : '10px',md :'0px'}}  w={{base:'150px', md : '200px', lg : '350px'}} borderRadius='50%' alt="Abrar Khan"/>
            </Box>
        </Flex>
        </>
    )
}