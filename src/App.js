import './App.css';
import { useContext, useRef } from 'react';
import { AppContext } from './Context/AppContext';
import Profile from './Components/Profile';
import About from './Components/About';
import { border, Box, Flex, Image, Switch, Text, theme } from '@chakra-ui/react';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'

function App() {
  const ProfileRef = useRef(null);
  const AboutRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null)
  const {Theme,SetTheme,ToggleTheme} = useContext(AppContext);
console.log(Theme)
  const style = {
    light : {
      backgroundColor : 'white', 
      color : '#805AD5'
    },

    dark : {
      backgroundColor : 'black', 
      color : '#B794F4'
    }
  }

  const light = {
    backgroundColor : 'white',
    color : 'black'
  }

  const dark = {
    backgroundColor : 'black',
    color : 'white'
  }

  const HandleScrollToDefault = ( ) =>{
    window.scrollTo({
      top : document.documentElement.scrollHeight,
      behavior : 'smooth'
    })
  }

  const HandleScrollTo = (ref) =>{
    window.scrollTo({
      top : ref.current.offsetTop,
      behavior : 'smooth'
    })

  }
  return (
    <div className="App" style={Theme ==='light'? light : dark} >
      <Flex  justifyContent='space-around' alignItems='center' className="NavMainFlex" shadow='lg' p='5px' style={Theme === 'light' ? style.light : style.dark}  h={{base : '45px', md : '60px'}}>
            <Box p='5px'>
                { Theme === 'light' ? <Image  width={{base : '30px', md : '40px'}} src="https://logodix.com/logo/2067253.png"/> : 
                <Image width={{base : '40px', md : '55px'}}  src="https://i.pinimg.com/originals/00/f7/8e/00f78e1fcdaecabd16c18818e7dcbfff.jpg"/>}
            </Box>

            <Flex  gap={{base : '18px', md : '35px'}} fontSize={{base : '12px', md : '18px'}} padding='5px' justifyContent='center' alignItems='center'>
                    <Text  onClick={( ) => HandleScrollTo(ProfileRef)}  className='refClick' size='sm' >Home</Text>
                    <Text  onClick={( ) => HandleScrollTo(AboutRef)}  className='refClick' size='sm'>About</Text>
                    <Text  onClick={( ) => HandleScrollTo(SkillsRef)}  className='refClick' size='sm'>Skills</Text>
                    <Text  onClick={( ) => HandleScrollTo(ProjectRef)}  className='refClick' size='sm'>Projects</Text>
                    <Text  onClick={( ) => HandleScrollTo(ContactRef)}  className='refClick' size='sm'>Contact</Text>
                    <Text onClick={ToggleTheme} className='DayNightButton'>{ Theme === 'light' ? <BsFillSunFill/> : <BsFillMoonFill/>}</Text>
            </Flex>
        </Flex>
     
     <Box ref={ProfileRef}>
      <Profile/>
     </Box>

     <Box mt={{base : '10%', md: '7%'}} ref={AboutRef}>
      <About/>
     </Box>

     <Box mt={{base : '10%', md : '7%', lg : '5%' }} ref={SkillsRef}>
      <Skills/>
     </Box>

     <Box mt={{base : '10%', md : '7%', lg : '5%' }} ref={ProjectRef}>
      <Projects/>
     </Box>

     <Box mt={{base : '7%', md : '7%', lg : '5%' }} ref={ContactRef}>
      <Contact/>
     </Box>
    </div>
  );
}

export default App;
