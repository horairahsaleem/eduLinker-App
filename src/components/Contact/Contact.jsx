import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { contactUs } from '../../redux/Actions/otherActions';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const Contact = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [message,setMessage]=useState()
          const dispatch = useDispatch();
      const {
        loading,
        error,
        message: stateMessage,
      } = useSelector(state => state.other);
    
      const submitHandler = e => {
        e.preventDefault();
        dispatch(contactUs(name, email, message));
      };
    
      useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch({ type: 'clearError' });
        }
    
        if (stateMessage) {
          toast.success(stateMessage);
          dispatch({ type: 'clearMessage' });
        }
      }, [dispatch, error, stateMessage]);
  return (
    <Container h='92vh'>
        <VStack h={'full'} justifyContent={'center'} spacing={'10'}>
            <Heading children='CONTACT US'/>
            <form onSubmit={submitHandler} style={{width:'100%'}}>
            <Box my={'4'}>

<FormLabel htmlFor='name' children='Name'/>
<Input required id='name' value={name} onChange={e => setName(e.target.value)}
placeholder='abc'
type='text'
focusBorderColor='yellow.500'
/>
</Box>

                <Box my={'4'}>

                <FormLabel htmlFor='email' children='Email Address'/>
                <Input required id='email' value={email} onChange={e => setEmail(e.target.value)}
                placeholder='abc@gmail.com'
                type='email'
                focusBorderColor='yellow.500'
                />
                </Box>
                <Box my={'4'}>

                <FormLabel htmlFor='message' children='Message'/>
                <Textarea required id='message' value={message} onChange={e => setMessage(e.target.value)}
                placeholder='Type Your text here'
                focusBorderColor='yellow.500'
                />
                </Box>
               
                
                <Button  isLoading={loading} type='submit' my={'4'} colorScheme='yellow'>
                    Send Mail
                </Button>
                <Box my={'4'}>
                    request for a course ? <Link to={'/request'}>
                    <Button colorScheme='yellow' variant={'link'}>
       Click
                    </Button>
                    </Link> {   }
                    here

                </Box>
                
                </form>

        </VStack>

    </Container>
  )
}

export default Contact
