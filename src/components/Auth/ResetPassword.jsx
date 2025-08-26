import { Heading, VStack,Input,Button,Container } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
    const {password,setPassword} =useState()
    const params = useParams()
    console.log(params.token
        
    )
  return (
    <Container py={'16'} h={'90vh'}>
        <form>
            <Heading children='Reset Password' my={'16'} textTransform={'uppercase'} textAlign={['center','left']} />
            <VStack>
            <Input required  value={password} onChange={e => setPassword(e.target.value)}
                placeholder='Enter your password'
                type='password'
                focusBorderColor='yellow.500'
                />
                <Button type='submit'   colorScheme='yellow' w={'full'} >
                    Update Password
                </Button>

            </VStack>
        </form>
    </Container>
  )
}

export default ResetPassword
