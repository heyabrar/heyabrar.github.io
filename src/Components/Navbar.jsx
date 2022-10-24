import { ReactNode, useContext } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { AppContext } from '../Context/AppContext';

const Links = ['Dashboard', 'Projects', 'Team'];

// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

export default function Navbar({ProfileRef,AboutRef,SkillsRef,ProjectsRef,ContactRef}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {Theme,ToggleTheme} = useContext(AppContext)

  const light = {
    backgroundColor : 'white',
    color : 'black'
  }

  const dark = {
    backgroundColor : 'black',
    color : 'white'
  }
  return (
    <>
      <Box px={4} style={Theme ==='light'? light : dark} className='ChackraNavBar'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton style={Theme ==='light'? light : dark}
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex justifyContent={'space-between'} w='90%' m={'auto'} color='#RGBA(0, 0, 0, 0.64)'>
            <Box p='5px'>
                { Theme === 'light' ? <Image  width={{base : '30px', md : '40px'}} src="https://logodix.com/logo/2067253.png"/> : 
                <Image width={{base : '40px', md : '55px'}}  src="https://i.pinimg.com/originals/00/f7/8e/00f78e1fcdaecabd16c18818e7dcbfff.jpg"/>}
            </Box>
            <Flex as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} gap='10px' w={{base : '', md : '60%', lg : '40%'}} justifyContent='space-between' alignItems='center' color='#805AD5' fontWeight='600'>
              <Text onClick={ProfileRef} cursor='pointer'>Home</Text>
              <Text onClick={AboutRef} cursor='pointer'>About</Text>
              <Text onClick={SkillsRef} cursor='pointer'>Skills</Text>
              <Text onClick={ProjectsRef} cursor='pointer'>Project</Text>
              <Text onClick={ContactRef} cursor='pointer'>Contact</Text>
            </Flex>
          </Flex>
            <Box width='5%' justifyContent={'center'} display='flex'>
            <Text onClick={ToggleTheme} cursor='pointer'>{ Theme === 'light' ? <BsFillMoonFill/> : <BsFillSunFill/>}</Text>
            </Box>
        </Flex> 
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }} style={Theme ==='light'? light : dark}>
            <Stack as={'nav'} spacing={4}>
              <Text onClick={ProfileRef} cursor='pointer'>Home</Text>
              <Text onClick={AboutRef} cursor='pointer'>About</Text>
              <Text onClick={SkillsRef} cursor='pointer'>Skills</Text>
              <Text onClick={ProjectsRef} cursor='pointer'>Project</Text>
              <Text onClick={ContactRef} cursor='pointer'>Contact</Text>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}