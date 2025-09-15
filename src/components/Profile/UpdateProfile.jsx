import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/Actions/profileActions.js';
import { loadUser } from '../../redux/Actions/userActions.js';
import {useNavigate} from 'react-router-dom'

const UpdateProfile = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const dispatch=useDispatch()
    const navigate= useNavigate()
    const updateProfileHandler= async (e)=>{
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
  };
    
const { message,error,loading} =useSelector(state=>state.profile)
 useEffect (()=>{
    if(error){
        toast.error(error)
        dispatch({type:'clearError'})
    }
if(message){
    toast.success(message)
    dispatch({type:'clearMessage'})
          navigate('/profile'); // navigate only after success

    
}

},[dispatch,message,error])
    
    
  return (
    <Container py={'16'} minH={'90vh'}>
        <form onSubmit={updateProfileHandler}>
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
            
                <Button isLoading={loading} w={'full'} colorScheme='yellow' type='submit'>Update Profile</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default UpdateProfile
