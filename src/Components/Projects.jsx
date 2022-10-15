import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import {AiFillChrome,AiFillGithub} from 'react-icons/ai'

export default function Projects ( ){
    return (
        <>
          <Text textAlign='center' color='#805AD5' fontSize={{base : '20px',md: '22px', lg : '40px'}} fontWeight={{base : '600', md : '700'}}>Projects</Text>
         <SimpleGrid columns={[1,1,1,2]}  w={{base : '85%', md: '80%', lg : '80%'}} m='auto' columnGap='80px' rowGap='25px' mt={{base : '15px'}} p={{base : '15px', md :'20px', lg :'25px'}}>
            <Box className="cardImg" m='auto'>
                <Image  m='auto' src="https://user-images.githubusercontent.com/103938174/195987381-d7a8e571-2cd5-43d2-9945-5800aac0819f.png" alt="Front Img" borderRadius='8px'/>
                <Image src="https://user-images.githubusercontent.com/103938174/193416543-a2f189f0-05d8-4c3e-95d4-96181acda2e1.png" alt="Back Img" class="imgTop"/>
            </Box> 

            <Box m='auto'>
                <Text fontSize={{base :'14px', md : '18px', lg : '22px'}} fontWeight='600'>BeautyBebo.com</Text>
                <Text fontSize={{base : '13px', md : '14px', lg: '16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} lineHeight={{base : '20px', md : '25px', lg : '30px'}}>Beauty Bebo is India’s fastest growing online retail store for the day to day and special occasion need of the
                    Makeup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products.
                </Text>
                <Text fontSize={{base : '12px', md : '14px' , lg :'16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} >An Indivial project built and executed in 4 Days</Text>
                <Text fontSize={{base : '14px', md : '18px', lg : '22px'}} mt={{base : '5px', md :'10px', lg : '12px'}} fontWeight='600'>Tech Stack</Text>
                <Text fontSize={{base : '10px', md : '14px'}} mt={{base : '2px', md :'5px', lg : '2px'}} letterSpacing={{base : '0.5', lg :'2px'}}>REACT | JAVASCRIPT | CHAKRA UI | ROUTER DOM | AXIOS | NPM</Text>
                <Flex gap='20px' mt={{base :'10px'}}> 
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://beauty-bebo-inky.vercel.app/" target='_blank'><AiFillChrome/></a></Text>
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://github.com/heyabrar/goldy-rake-5952" target='_blank'><AiFillGithub/></a></Text>
                </Flex>
            </Box>
         </SimpleGrid>  


         <Flex  w={{base : '85%', md: '80%', lg : '80%'}} m='auto' columnGap='80px' rowGap='25px' mt={{base : '30px', lg :'6%'}} direction={{base : 'column-reverse', lg :'row'}}  p={{base : '15px', md :'20px', lg :'25px'}}>
            <Box m='auto'>
                <Text fontSize={{base :'14px', md : '18px', lg : '22px'}} fontWeight='600'>Freshly.com</Text>
                <Text fontSize={{base : '13px', md : '14px', lg: '16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} lineHeight={{base : '20px', md : '25px', lg : '30px'}}>
                Freshly is the leading prepared meal delivery subscription service providing nutritionist-approved, balanced meals that are delivered fresh to your 
                door and ready-to-eat in three minutes. With a mission to break down the barriers to healthy eating, Freshly delivers effortless nourishment that works for real life.
                </Text>
                <Text fontSize={{base : '12px', md : '14px' , lg :'16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} >A Colaborative project built by a team of 4 members executed in 4 Days</Text>
                <Text fontSize={{base : '14px', md : '18px', lg : '22px'}} mt={{base : '5px', md :'10px', lg : '12px'}} fontWeight='600'>Tech Stack</Text>
                <Text fontSize={{base : '10px', md : '14px'}} mt={{base : '2px', md :'5px', lg : '2px'}} letterSpacing={{base : '0px', lg :'2px'}}>HTML | CSS | JAVASCRIPT</Text>
                <Flex gap='20px' mt={{base :'10px'}}> 
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://lucky-longma-b5b6e1.netlify.app/" target='_blank'><AiFillChrome/></a></Text>
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://github.com/dineshjangid03/magical-cat-4738" target='_blank'><AiFillGithub/></a></Text>
                </Flex>
            </Box>

            <Box className="cardImg" m='auto'>
                <Image  m='auto' src="https://user-images.githubusercontent.com/103938174/194705621-5672200d-fc57-4fd1-9e81-5296e245f4bc.png" alt="Front Img" borderRadius='8px'/>
                <Image src="https://user-images.githubusercontent.com/103938174/194705661-60d1b0ac-8b4a-4f59-8e9d-1d160da65ce0.png" alt="Back Img" class="imgTop"/>
            </Box> 
         </Flex>


         <SimpleGrid columns={[1,1,1,2]}  w={{base : '85%', md: '80%', lg : '80%'}} m='auto' columnGap='80px' rowGap='25px' mt={{base : '30px', lg :'6%'}} p={{base : '15px', md :'20px', lg :'25px'}}>
            <Box className="cardImg" m='auto'>
                <Image  m='auto' src="https://user-images.githubusercontent.com/103938174/195992334-b4d6c015-e172-4d1f-bee9-448aa2413529.png" alt="Front Img" borderRadius='8px'/>
                <Image src="https://user-images.githubusercontent.com/103938174/195992296-67899a72-9a18-4849-b02a-d4041104a969.png" alt="Back Img" class="imgTop"/>
            </Box> 

            <Box m='auto'>
                <Text fontSize={{base :'14px', md : '18px', lg : '22px'}} fontWeight='600'>CarbManager.com</Text>
                <Text fontSize={{base : '13px', md : '14px', lg: '16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} lineHeight={{base : '20px', md : '25px', lg : '30px'}}>
                Carb Manager integrates seamlessly with FitBit, Garmin, and hundreds of other apps and devices via Apple Health and Google Fit, helping you to: Lose 
                weight quickly. Reduce inflammation. Optimize energy. Gain mental clarity.
                </Text>
                <Text fontSize={{base : '12px', md : '14px' , lg :'16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} >An Indivial project built and executed in 4 Days</Text>
                <Text fontSize={{base : '14px', md : '18px', lg : '22px'}} mt={{base : '5px', md :'10px', lg : '12px'}} fontWeight='600'>Tech Stack</Text>
                <Text fontSize={{base : '10px', md : '14px'}} mt={{base : '2px', md :'5px', lg : '2px'}} letterSpacing={{base : '0.5', lg :'2px'}}>REACT | JAVASCRIPT | CHAKRA UI | ROUTER DOM | AXIOS | NPM</Text>
                <Flex gap='20px' mt={{base :'10px'}}> 
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://venerable-maamoul-70f361.netlify.app/" target='_blank'><AiFillChrome/></a></Text>
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://github.com/heyabrar/flashy-burst-4121" target='_blank'><AiFillGithub/></a></Text>
                </Flex>
            </Box>
         </SimpleGrid>  


         <Flex  w={{base : '85%', md: '80%', lg : '80%'}} m='auto' columnGap='80px' rowGap='25px' mt={{base : '30px', lg :'6%'}} direction={{base : 'column-reverse', lg :'row'}}  p={{base : '15px', md :'20px', lg :'25px'}}>
            <Box m='auto'>
                <Text fontSize={{base :'14px', md : '18px', lg : '22px'}} fontWeight='600'>Shopme.com</Text>
                <Text fontSize={{base : '13px', md : '14px', lg: '16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} lineHeight={{base : '20px', md : '25px', lg : '30px'}}>
                Shopme.com is not a clone of an existing website. The design is inspired by multiple websites. 
                Basically Shopme.com is a E-commerce clothing web application where user get a collection of mens, women and kids clothing.
                </Text>
                <Text fontSize={{base : '12px', md : '14px' , lg :'16px'}} mt={{base : '5px', md :'10px', lg : '12px'}} >An Individual project built and executed  in 1 Day</Text>
                <Text fontSize={{base : '14px', md : '18px', lg : '22px'}} mt={{base : '5px', md :'10px', lg : '12px'}} fontWeight='600'>Tech Stack</Text>
                <Text fontSize={{base : '10px', md : '14px'}} mt={{base : '2px', md :'5px', lg : '2px'}} letterSpacing={{base : '0.5px', lg :'2px'}}>REACT | JAVASCRIPT | CHAKRA UI | ROUTER DOM | NPM</Text>
                <Flex gap='20px' mt={{base :'10px'}}> 
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://router-project-heyabrar.vercel.app/" target='_blank'><AiFillChrome/></a></Text>
                    <Text  fontSize={{base :'20px', md : '25px', lg : '26px'}} ><a href="https://github.com/heyabrar/My-Projects/tree/main/Router_Cart_S3_D1/router_project" target='_blank'><AiFillGithub/></a></Text>
                </Flex>
            </Box>

            <Box className="cardImg" m='auto'>
                <Image  m='auto' src="https://user-images.githubusercontent.com/103938174/195992762-dafd25a9-43db-49a9-b7b0-1d5afc58b931.png" alt="Front Img"/>
                <Image src="https://user-images.githubusercontent.com/103938174/195992814-a85f24d8-6266-45dd-a925-feb094b5db02.png" alt="Back Img" class="imgTop"/>
            </Box> 
         </Flex>
        </>
    )
}