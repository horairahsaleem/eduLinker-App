import React from 'react'
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import {RiCheckboxCircleFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'

const PaymentSuccess = () => {
  return (
   <Container h={'90vh'} padding={'16'}>
    <Heading my={'8'} textAlign={'center'}>
      You have Pro Pack

    </Heading>
    <VStack boxShadow={'lg'} borderRadius={'lg'} alignItems={'center'} pb={'16'}>
      <Box p={'4'} backgroundColor={'yellow.400'} w={'full'} css={{borderRadius:"8px 8px 0 0"}}>
        <Text color={'black'}> Payment Success
        </Text> 
      </Box>
      <Box p={'4'}>
        <VStack mt={'8'} textAlign={'center'} px={'8'} spacing={'8'} >
<Text>
  Congratulations you are a pro member.You have access to premium content .
</Text>
<Heading size={'4xl'}>
  <RiCheckboxCircleFill/>
</Heading>
        </VStack>

      </Box>
      <Link to={'/profile'}>
      <Button variant={'ghost'}>
        Go to profile
      </Button>
      

      </Link>
      <Heading size={'xs'}>
        Reference:ssdsdfdsfdsfdsfdf
      </Heading>

    </VStack>

   </Container>
  )
}

export default PaymentSuccess
