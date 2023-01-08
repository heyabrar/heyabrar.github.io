import {
  Box,
  Center,
  Text,
  Stack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
import LinkedinButton from './LinkedInFollowBtn';

export default function SocialProfileSimple() {
  const { Theme } = useContext(AppContext);

  const light = {
    backgroundColor: '#E9D8FD',
    color: 'black'
  }

  const dark = {
    backgroundColor: 'black',
    color: 'white'
  }
  return (
    <>
      <Text color='#805AD5' fontSize={{ base: '22px', md: '22px', lg: '40px' }} fontWeight={{ base: '600', md: '700' }} textAlign='center'>About Me</Text>
      <Center style={Theme === 'light' ? light : dark}>
        <Box style={Theme === 'light' ? light : dark}
          maxW={{ base: '400px', md: '500px', lg: '550px' }}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          rounded={'lg'}
          textAlign={'center'}>

          <Text fontWeight={600} color={'gray.500'} mb={4}> @Abrar_Khan</Text>
          <Text textAlign={'justify'} color={useColorModeValue('gray.700', 'gray.400')} px={3} style={Theme === 'light' ? light : dark} width={{ base: '90%' }} m='auto'>
            An ambitious developer with the ability to write neat and understandable code, looking forward to join a team with whom
            communication and teamwork are paramount. Certified in MERN Stack technologies. Seeking to further improve in building
            the web applications as the future full stack developer at Atmospheric Solutions.
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>#WebDesign</Badge>
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

          <Stack mt={1} direction={'row'} spacing={4} >
            <a href="https://www.linkedin.com/in/abrar-khan-b67333230/" target='_blank' style={{ width: '90%', margin: 'auto' }}><LinkedinButton /></a>
          </Stack>
        </Box>
      </Center>
    </>
  );
}