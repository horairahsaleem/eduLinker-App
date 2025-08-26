import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
  return (
    <Container py={'16'} minH={'90vh'}>
        <form>
            <Heading 
            textAlign={['center','left']}
            my={'16'}
            textTransform={'uppercase'}
            children='Update profile'
            />
            <VStack spacing={'8'}>
            <Input  id='name'  onChange={e => setName(e.target.value)}
                placeholder='ABC'
                type='text'
                focusBorderColor='yellow.500'
                />  
            <Input  id='email'  onChange={e => setEmail(e.target.value)}
                placeholder='Enter your Email'
                type='email'
                focusBorderColor='yellow.500'
                />  
            
                <Button w={'full'} colorScheme='yellow' type='submit'>Update Profile</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default UpdateProfile
