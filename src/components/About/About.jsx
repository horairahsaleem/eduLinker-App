import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import image from'../../assets/images/ab.jpg'
import { Link } from 'react-router-dom';
import Introvideo from '../../assets/vedios/intro.mp4'
import {RiSecurePaymentFill} from 'react-icons/ri'
import termsAndConditions from '../../assets/docs/termsAndCondition'
const Founder=()=>(
    <Stack direction={['column','row']} spacing={['16','4']} padding={'8'}>
        <VStack>
            <Avatar src={image} boxSize={['40','48']}/>
            <Text children={'Co Founder'} opacity={0.7}/>
            </VStack>

           <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
            <Heading children='Horairah Saleem' size={['md','xl']}/>
            <Text textAlign={['center','left']} children="I’m a full-stack developer and educator, dedicated 
            to delivering high-quality content at an affordable price.
             Our mission is to make learning accessible, 
             ensuring that everyone can benefit from comprehensive,
              practical knowledge without breaking the bank."/>
            
            </VStack> 
    </Stack>

);
const VideoPlayer=()=>(
    <video controls  autoPlay 
    controlsList='nodownload nofullscreen noremoteplayback'
    disablePictureInPicture
    disableRemotePlayback
   src={Introvideo}/>
)

const TandC=({termsandCondition})=>(
    <Box overflowY={'scroll'} >
        <Heading textAlign={['center','left']} size={'md'} children='Terms and Conditions'/>
        <Box h={'sm'} p={'4'}>
            <Text textAlign={['center','left']} fontFamily={'heading'} letterSpacing={'widest'}>
                {termsandCondition}
            </Text>
            <Heading size={'xs'} my={'4'} children=' Refund only applicable for cancelation within 7 days'/>


        </Box>



    </Box>

) 
const About = () => {
return (

<Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
<Heading children='About Us' textAlign={['center','left']}/>

<Founder/>
<Stack m={'8'} direction={['column','row']} alignItems={'center'}>
    <Text alignItems={['center','left']} m={'8'} fontFamily={'cursive'} >
    We are a video streaming platform that delivers top-tier educational content, 
    with a special collection of premium courses available exclusively to our premium members.
     Our focus is on providing exceptional learning opportunities tailored to all users,
      ensuring both quality and accessibility

    </Text>
    <Link to='/subscribe'>
    <Button variant={'ghost'} colorScheme='yellow'>
        Checkout Our Plans
    </Button>
    
    
    </Link>

</Stack>
<VideoPlayer/>
<TandC termsandCondition={termsAndConditions}/>
<HStack my={'4'} padding={'4'}>
    <RiSecurePaymentFill/>
<Heading 
size={'xs'}
fontFamily={'sans-serif'}
textTransform={'uppercase'}
children='Payment is secured by Razorpay'
/>

</HStack>


</Container>
  )
}

export default About
