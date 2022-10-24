import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
  
  export default function SocialProfileSimple() {
    const {Theme} = useContext(AppContext);

    const light = {
      backgroundColor : 'white',
      color : 'black'
    }
  
    const dark = {
      backgroundColor : 'black',
      color : 'white'
    }
    return (
      <Center py={6} style={Theme === 'light' ? light : dark}>
        <Box style={Theme === 'light' ? light : dark}
          maxW={{base : '350px', md : '450px', lg : '500px'}}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>

          <Heading fontSize={'2xl'} fontFamily={'body'}>Abrar Khan</Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}> @Abrar_Khan</Text>
          <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3} style={Theme === 'light' ? light : dark}>
             Ambitious and an aspiring Full-stack Web Developer with core knowledge of 
             MERN stack technology. Looking forward in implementing and to tweak my capabilities as a developer.
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge px={2} py={1}  bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>#WebDesign</Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #business
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #tech
            </Badge>
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
           <a href="https://www.linkedin.com/in/abrar-khan-b67333230/" target='_blank' style={{width : '90%', margin:'auto'}}>
           <Button
              flex={1}
              w='100%   '
              fontSize={'sm'}
              rounded={'full'}
              bg={'#805AD5'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: '#805AD5',
              }}
              _focus={{
                bg: '#805AD5',
              }}>
              Follow
            </Button>
           </a>
          </Stack>
        </Box>
      </Center>
    );
  }