import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [oldpassword,setOldPassword]=useState()
    const [newpassword,setNewPassword]=useState()
  return (
    <Container py={'16'} minH={'90vh'}>
        <form>
            <Heading 
            textAlign={['center','left']}
            my={'16'}
            textTransform={'uppercase'}
            children='change password'
            />
            <VStack spacing={'8'}>
            <Input required id='oldpassword'  onChange={e => setOldPassword(e.target.value)}
                placeholder='Old Password'
                type='password'
                focusBorderColor='yellow.500'
                />  
            <Input required id='newpassword'  onChange={e => setNewPassword(e.target.value)}
                placeholder=' New Password'
                type='password'
                focusBorderColor='yellow.500'
                />  
                <Button w={'full'} colorScheme='yellow' type='submit'>Change Password</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ChangePassword
