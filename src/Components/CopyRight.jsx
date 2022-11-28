import { Box, Flex, Text } from "@chakra-ui/react";
import {HiLocationMarker} from 'react-icons/hi'

export default function CopyRight ( ){
    return (
        <>
            <Box fontSize={{base : '12px', md : '14px', lg : '16px'}} border='1px solid red'>
                <Text>Email : heyabrarkhan@gmail.com</Text>
                <Flex justifyContent='center' alignItems='center' gap='5px' mt='5px'>
                <Text><HiLocationMarker/></Text>
                <Text>Bengaluru, India</Text>
                </Flex>
                <Text mt='5px'>Copyright © 2022</Text>
            </Box>
        </>
    )
}