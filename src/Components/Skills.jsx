import { Box, Flex, GridItem, Image, SimpleGrid, Text } from "@chakra-ui/react";
import GitCalenderOffical from "./GitHubCalender";
import GitStats from "./GitStats";

export default function Skills ( ) {
    return (
        <>
        <Box w={{base : '95%', md :'90%', lg : '80%'}} m='auto' mt='5%'>
         <Text textAlign='center' color='#805AD5' fontSize={{base : '20px',md: '22px', lg : '40px'}} fontWeight={{base : '600', md : '700'}}>Technical Skills</Text>
        <Text textAlign='center' fontSize={{base : '12px',md: '18px', lg : '20px'}} fontWeight={{base : '600', md : '600'}} mt={{base : '10px', md : '20px', lg :'35px'}} letterSpacing={{base : '3px'}}>FRONT END </Text>
            <SimpleGrid columns={[4,4,4,4]} fontSize={{base : '12px', md : '14px'}} fontWeight='600' rowGap='30px' mt={{base :'5px', md :'10px'}}>

                <GridItem m='auto' mt={{base : '20px', md :'30px' , lg :'6' }} >  
                    <Image w={{base : '45px', md : '80px', lg :'80px'}} src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'  borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>HTML5</Text>
                </GridItem>

                <Box  m='auto' mt={{base : '20px', md :'30px' , lg :'6' }}>
                    <Image w={{base : '45px', md : '80px', lg :'80px'}} src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png'  borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>CSS3</Text>
                </Box>

                <Box  m='auto' mt={{base : '20px', md :'30px' , lg :'6' }}>
                    <Image w={{base : '45px', md : '80px', lg :'70px'}} m='auto' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' shadow='lg' borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '20px'}}>JavaScript</Text>
                </Box> 

                <GridItem  m='auto' mt={{base : '20px', md :'30px' , lg :'6' }}>
                    <Image w={{base : '45px', md : '80px', lg :'70px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'  mt='9px' borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '20px'}}>React.Js</Text>
                </GridItem>

                <GridItem  m='auto' mt={{base : '20px', md :'30px' , lg :'6' }}>
                    <Image w={{base : '45px', md : '80px', lg :'70px'}} src='https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png'  borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '20px'}}>Redux</Text>
                </GridItem>

                <GridItem m='auto' mt={{base : '20px', md :'30px' , lg :'6' }}>
                    <Image w={{base : '45px', md : '80px', lg :'70px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png' shadow='lg' borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>TypeScript</Text>
                </GridItem>

                <GridItem  m='auto' mt={{base : '20px', md :'30px' , lg :'6' }}>
                    <Image w={{base : '35px', md : '60px', lg :'55px'}} src='https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png' borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>Figma</Text>
                </GridItem>

                <GridItem  m='auto' mt={{base : '20px', md :'30px' , lg :'6' }}>
                    <Image w={{base : '45px', md : '80px', lg :'70px'}} src='https://www.coffeeclass.io/logos/chakra-ui.png'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '20px'}}>Chakra UI</Text>
                </GridItem>
            </SimpleGrid>

            <Text textAlign='center' fontSize={{base : '12px',md: '18px', lg : '20px'}} fontWeight={{base : '600', md : '600'}} mt={{base : '50px', md : '80px', lg :'55px'}} letterSpacing={{base : '3px'}}>BACK END </Text>
            <SimpleGrid columns={[4,4,4,4]} fontSize={{base : '12px', md : '14px'}} fontWeight='600' rowGap='15px'>
            <Box m='auto' mt={{base : '20px', md :'30px' , lg :'6' }} >
                    <Image w={{base : '45px', md : '80px', lg :'70px'}} src='https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png'  borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>Node.Js</Text>
                </Box>

                <Box m='auto' mt={{base : '20px', md :'30px' , lg :'6' }} >
                    <Image w={{base : '45px', md : '80px', lg :'70px'}} src='https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg'  borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>Mongodb</Text>
                </Box>

                <Box m='auto' mt={{base : '20px', md :'30px' , lg :'6' }} >
                    <Image w={{base : '45px', md : '80px', lg :'70px'}} src='https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png' borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>Express</Text>
                </Box>

        
                <GridItem m='auto' mt={{base : '20px', md :'30px' , lg :'6' }}>
                    <Image w={{base : '45px', md : '80px', lg :'70px'}} src='https://authy.com/wp-content/uploads/npm-logo.png' borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>NPM</Text>
                </GridItem>
            </SimpleGrid>


            <Text textAlign='center' fontSize={{base : '12px',md: '18px', lg : '20px'}} fontWeight={{base : '600', md : '600'}} mt={{base : '60px', md : '80px', lg :'55px'}} letterSpacing={{base : '3px'}}>VERSION CONTROL</Text>
            <SimpleGrid columns={[2,2,2,2]} fontSize={{base : '12px', md : '14px'}} fontWeight='600' rowGap='15px'  w={{base : '45%'}} m='auto' mt={{base : '5px', md : '10px'}}>
                <Box m='auto' mt={{base : '20px', md :'30px' , lg :'6' }} >
                    <Image w={{base : '45px', md : '80px', lg :'70px'}} src='https://icones.pro/wp-content/uploads/2021/06/symbole-github-violet.png'  borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>Git Hub</Text>
                </Box>

                <Box m='auto' mt={{base : '20px', md :'30px' , lg :'6' }} >
                    <Image w={{base : '45px', md : '80px', lg :'70px'}} src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'  borderRadius='5px'/>
                    <Text  textAlign='center' mt={{base : '10px', lg : '15px'}}>Git</Text>
                </Box>
            </SimpleGrid>

           
        </Box>

        <Box>
            <GitStats/> 
        </Box>
        
        <Box>
            <GitCalenderOffical/>
        </Box>
        </>
    )
}