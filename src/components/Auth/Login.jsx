import { Box, Button, Container, FormLabel, Heading, Input, Stack } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login} from '../../redux/Actions/userActions.js'

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
     const dispatch = useDispatch();

 const submitHandler = (e) => {
  e.preventDefault();
  // trim to avoid invisible spaces causing 401
  dispatch(login(email.trim(), password.trim()));
};
  return (
    
    <Container h={'95vh'}>
        <Stack h={'full'} justifyContent={'center'} spacing={'16'}>
            <Heading children='Welcome to CourseBundler'/>
            <form onSubmit={submitHandler} style={{width:'100%'}}>
                <Box my={'4'}>

                <FormLabel htmlFor='email' children='Email Address'/>
                <Input required id='email' value={email} onChange={e => setEmail(e.target.value)}
                placeholder='abc@gmail.com'
                type='email'
                focusBorderColor='yellow.500'
                />
                </Box>
                <Box my={'4'}>

                <FormLabel htmlFor='password' children='Password'/>
                <Input required id='password' value={password} onChange={e => setPassword(e.target.value)}
                placeholder='Enter Your Password'
                type='password'
                focusBorderColor='yellow.500'
                />
                </Box>
                <Box>
                    <Link to={'/forgetpassword'}>
                    <Button fontSize={'sm'} variant={'link'}>Forgot Password</Button>
                    </Link>
                </Box>
                <Button type='submit' my={'4'} colorScheme='yellow'>
                    Submit
                </Button>
                <Box my={'4'}>
                    NewUser ? <Link to={'/register'}>
                    <Button colorScheme='yellow' variant={'link'}>
       Sign Up
                    </Button>
                    </Link> {   }
                    here

                </Box>
                
                </form>
        </Stack>
    </Container>
    
  )
}

export default Login
