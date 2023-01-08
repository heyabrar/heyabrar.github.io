import { Box, Flex, Text } from "@chakra-ui/react";
import { AiOutlinePhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from 'react-icons/hi'

export default function CopyRight() {
    return (
        <>
            <Box fontSize={{ base: '12px', md: '14px', lg: '16px' }}>
                <Flex alignItems='center' justifyContent='center' gap='5px' >
                    <GrMail />
                    <Text>heyabrarkhan@gmail.com</Text>
                </Flex>

                <Flex alignItems='center' justifyContent='center' gap='5px' mt={{ base: '5px', md: '10px' }}>
                    <AiOutlinePhone />
                    <Text>+91 8217361455</Text>
                </Flex>

                <Flex justifyContent='center' alignItems='center' gap='5px' mt={{ base: '5px', md: '10px' }}>
                    <Text><HiLocationMarker /></Text>
                    <Text>Bengaluru, India</Text>
                </Flex>
                <Text mt={{ base: '10px', md: '25px' }} fontSize={{ base: '12px', md: '14px' }}>Copyright © 2022</Text>
            </Box>
        </>
    )
}