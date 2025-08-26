import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {TiSocialYoutubeCircular, TiSocialInstagramCircular} from 'react-icons/ti'
import{DiGithub} from "react-icons/di"
function Footer() {
  return (
    <>
    <Box padding={'4'} bg={'blackAlpha.900'} minH={'10vh'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={['center','flex-start']} width={'full'}>
                <Heading color={'white'}>All Rights Are Reserved to </Heading>
                <Heading color={'yellow.400'} fontFamily={'body'} size='sm'> Horairah Saleem</Heading>
            </VStack>
            <HStack color={'white'} fontSize={'50'} spacing={['2','10']} justifyContent={'center'}>
                <a href='https://youtube.com/6packprogrammer' target='blank'> <TiSocialYoutubeCircular/> </a>
                <a href='https://instagram.com/shorairah' target='blank'> <TiSocialInstagramCircular/> </a>
                <a href='https://github.com/horairahsaleem' target='blank'> <DiGithub/> </a>

            </HStack>
        </Stack>

    </Box>
    
    </>
  )
}

export default Footer
