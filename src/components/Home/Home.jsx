import React from 'react'
import { Box, Button, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react' 
import "./home.css";
import { Link } from 'react-router-dom';
import vg from  "../../assets/images/bg.png"
import Introvideo from  "../../assets/vedios/intro.mp4"
import {CgGoogle,CgYoutube} from 'react-icons/cg';
import {SiCoursera,SiUdemy} from 'react-icons/si';
import {DiAws} from 'react-icons/di';



const Home = () => {
  return (
   <section className='home'>
    <div className='container'>
        <Stack direction={['column','row']} height='100%' justifyContent={["column","space-between"]}
        alignItems={'center'} spacing={['16', '56']}>

            <VStack width={'full'} alignItems={['center','flex-end']} spacing={'8'}>
                <Heading size={"2xl"}> LEARN FROM THE EXPERT </Heading>
                <Text textAlign={['center','left']} fontFamily={'cursive'} fontSize={'2xl'}>Find the valuable premium content from the expert</Text>
                <Link to="/courses">
                <Button size={'lg'} colorScheme=' yellow'>
                    Explore Now

                </Button>
                </Link>

            </VStack>
            <Image className='vector-graphics' boxSize={'md'} src={vg} objectFit={'contain'}/>
            </Stack>
            </div>
            <Box padding={'8'} bg={'blackAlpha.800'}>
                <Heading textAlign={'center'} fontFamily='body' color={'yellow.400'} >
                OUR BRANDS
                </Heading>
               </Box >
               <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop={'4'}>
                <CgGoogle/>
                <CgYoutube/>
                <SiCoursera/>
                <SiUdemy/>
                <DiAws/>


               </HStack>
               <div className="container2">
                <video
                controls  autoPlay 
                 controlsList='nodownload nofullscreen noremoteplayback'
                 disablePictureInPicture
                 disableRemotePlayback
                src={Introvideo}
                >

                </video>
               </div>

   </section>
  )
}

export default Home
